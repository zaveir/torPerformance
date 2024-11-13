import * as fs from "fs";
import { launchNormal, launchTor } from "./launch.js";
import { readPcapFile } from "./read.js";
import { filter, isValid } from "./util.js";
import { data } from "./data.js";

const Mode = Object.freeze({
    NORMAL: 0,
    TOR: 1,
    VPN: 2
});

const args = process.argv.slice(2);

let mode;
if (args[0] === '0') mode = Mode.NORMAL;
else if (args[0] === '1') mode = Mode.TOR;
else mode = Mode.VPN;

const n = parseInt(args[1]);
const site = args[2];

const debug = args.length === 4 && args[3] === 'd';

const links = mode === Mode.TOR ? data[1][site] : data[0][site];
const launch = mode === Mode.TOR ? launchTor : launchNormal;

const start = new Date();
const { filteredLoads, filteredBandwidths } = await getMetrics(links, launch);
const end = new Date();
console.log(`Took ${(end - start) / 1000 / 60} min`);

saveMetrics(filteredLoads, true);
saveMetrics(filteredBandwidths, false);

async function getMetrics(links, launch) {
    const loads = [];
    const bandwidths = [];

    // n = 100, links per page = 5, ideal iterations = 20, max = 60
    let i = 0;
    const maxIterations = n / links.length * 3;

    while (i < maxIterations && Math.min(loads.length, bandwidths.length) < n) {
        console.log(`i=${i} out of n=${n}`);
        
        for (const link of links) {
            if (loads.length == n) break

            try {
                const { load, bandwidth } = await runPuppet(link, launch);
                if (isValid(load) && isValid(bandwidth)) {
                    loads.push(load);
                    bandwidths.push(bandwidth);
                }
            } catch (error) {
                console.error(`main loop: ${error}`);
            }
        }
        i++;
    }

    const filteredLoads = filter(loads).join("\n");
    const filteredBandwidths = filter(bandwidths).join("\n");

    return { filteredLoads, filteredBandwidths };
}

function saveMetrics(metrics, isLoad) {
    const metric = isLoad ? "Load" : "Band";

    let fileName;
    if (mode === Mode.NORMAL) fileName = `${site}Normal${metric}`;
    else if (mode === Mode.TOR) fileName = `${site}Tor${metric}`;
    else fileName = `${site}Vpn${metric}`;

    const now = new Date()
    const time = `${now.getMonth() + 1}_${now.getDate()}_${now.getHours()}_${now.getMinutes()}`;
    const archivePath = `./archive/${fileName}_${time}.txt`
    const normalPath = `./metrics/${fileName}.txt`

    fs.writeFile(normalPath, metrics, (err) => {
        if (err) throw err;
    });
    fs.writeFile(archivePath, metrics, (err) => {
        if (err) throw err;
    });
}

async function runPuppet(link, launch) {
    try {
        // const metrics = await launch(link);
        const load = await launch(link);
        const bandwidth = await readPcapFile("capture.pcap");
        const res = {
            load: load,
            // load: metrics.TaskDuration,
            bandwidth: bandwidth
        }
        return res;
    } catch (error) {
        console.error(`runPuppet: ${error}`);
        throw error;
    } 
    
}

export { debug, mode, Mode };
