Download modules:
```
npm install
```

Run the data collection code:
```
node main.js [mode] [sample_size] [site]
```

Modes:\
`0`: normal browser\
`1`: Tor\
`2`: VPN

Sites:\
`bbc`, `guardian`, `propub`, `rfa`, `voa`, `tor`, `cia`, `reddit`

Run the data collection code in debug mode:
```
node main.js [mode] [sample_size] [site] -d
```

Run the graphing code:
```
python3 plot.py [site]
```