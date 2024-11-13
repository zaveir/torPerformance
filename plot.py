import sys
import matplotlib.pyplot as plt
from scipy.stats import wasserstein_distance as wd
import numpy as np

site = sys.argv[1]

normal_load = []
f_normal = open(f"./metrics/{site}NormalLoad.txt","r") 
for num in f_normal: 
    normal_load.append(float(num.strip())) 

tor_load = []
f_tor = open(f"./metrics/{site}TorLoad.txt", "r")
for num in f_tor:
    tor_load.append(float(num.strip()))

vpn_load = []
f_vpn = open(f"./metrics/{site}VpnLoad.txt", "r")
for num in f_vpn:
    vpn_load.append(float(num.strip()))

normal_band = []
f_normal = open(f"./metrics/{site}NormalBand.txt","r") 
for num in f_normal: 
    normal_band.append(float(num.strip())) 

tor_band = []
f_tor = open(f"./metrics/{site}TorBand.txt", "r")
for num in f_tor:
    tor_band.append(float(num.strip()))

vpn_band = []
f_vpn = open(f"./metrics/{site}VpnBand.txt", "r")
for num in f_vpn:
    vpn_band.append(float(num.strip()))

loads = [normal_load, vpn_load, tor_load]
bands = [normal_band, vpn_band, tor_band]
labels = ["normal", "vpn", "tor"]
colors = ["dodgerblue", "yellowgreen", "coral"]
median_positions = [0.7, 0.65, 0.6]


fig, (ax1, ax2) = plt.subplots(nrows=1, ncols=2)
fig.suptitle(site.capitalize())

ax1.set_title("Distribution of Load Times")
ax1.set_xlabel("Load Time (s)")
ax1.set_ylabel("Number of Observations")

ax1.text(0.8, 0.75, "Median", transform=ax1.transAxes, fontsize=10)

for (load, label, color, position) in zip(loads, labels, colors, median_positions):
    median = np.median(load)
    ax1.hist(load, label=label, color=color, alpha=0.8)
    ax1.axvline(median, color=color, linestyle="dashed", linewidth=1)
    median_str = "{:.2f}".format(median)
    ax1.text(0.8, position, median_str, transform=ax1.transAxes, fontsize=10, color=color)

ax1.legend()

ax2.set_title("Distribution of Bandwidths")
ax2.set_xlabel("Bandwidth (Mbps)")
ax2.set_ylabel("Number of Observations")

ax2.text(0.8, 0.75, "Median", transform=ax2.transAxes, fontsize=10)

for (load, label, color, position) in zip(bands, labels, colors, median_positions):
    median = np.median(load)
    ax2.hist(load, label=label, color=color, alpha=0.8)
    ax2.axvline(median, color=color, linestyle="dashed", linewidth=1)
    median_str = "{:.2f}".format(median)
    ax2.text(0.8, position, median_str, transform=ax2.transAxes, fontsize=10, color=color)

ax2.legend()

load_combos = [(normal_load, vpn_load), (vpn_load, tor_load), (normal_load, tor_load)]
band_combos = [(normal_band, vpn_band), (vpn_band, tor_band), (normal_band, tor_band)]
wd_labels = ["N/V", "V/T", "N/T"]
wd_positions = [0.45, 0.4, 0.35]

ax1.text(0.8, 0.5, "Earth Mover's", transform=ax1.transAxes, fontsize=10)
ax2.text(0.8, 0.5, "Earth Mover's", transform=ax2.transAxes, fontsize=10)

for (combo, label, position) in zip(load_combos, wd_labels, wd_positions):
    ax1.text(0.8, position, label + ": {:.2f}".format(wd(*combo)), transform=ax1.transAxes, fontsize=10)

for (combo, label, position) in zip(band_combos, wd_labels, wd_positions):
    ax2.text(0.8, position, label + ": {:.2f}".format(wd(*combo)), transform=ax2.transAxes, fontsize=10)

plt.show()
