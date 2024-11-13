import pcapParser from "pcap-parser";
import { debug } from "./main.js";

export async function readPcapFile(filePath) {
    return new Promise((resolve, reject) => {
        const parser = pcapParser.parse(filePath);

        let totalLength = 0;
        let firstts_s = null;
        let firstts_ms = null;
        let lastts_s = null;
        let lastts_ms = null;

        parser.on("packet", (packet) => {
            if (packet.header.capturedLength > 0) {
                const length = packet.header.originalLength;
                const ts_s = packet.header.timestampSeconds;
                const ts_ms = packet.header.timestampMicroseconds;
    
                totalLength += length;
    
                if (
                    !firstts_s ||
                    ts_s < firstts_s ||
                    (ts_s === firstts_s && ts_ms < firstts_ms)
                ) {
                    firstts_s = ts_s;
                    firstts_ms = ts_ms;
                }
    
                if (
                    !firstts_s ||
                    ts_s > firstts_s ||
                    (ts_s === firstts_s && ts_ms > firstts_ms)
                ) {
                    lastts_s = ts_s;
                    lastts_ms = ts_ms;
                }
            }
        });

        parser.on("end", () => {
            const diff =
                lastts_s - firstts_s + (lastts_ms - firstts_ms) / 1000000;
            const bandwidth = totalLength / 1000000 / diff;
            if (debug) console.log(`Time diff: ${diff}s`);
            resolve(bandwidth);
        });

        parser.on("error", (err) => {
            console.error(`Error reading pcap file: ${err.message}`);
            reject(err);
        });
    });
  
}
