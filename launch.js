import puppeteer from "puppeteer";
import { spawn } from "child_process";
import { debug, mode, Mode } from "./main.js";
import { sleep } from "./util.js";

async function launchNormal(link) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    // To prevent Access Denied message
    page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
    );

    try {
        // await useTcpDumpNormal(page, link);
        // mode === Mode.NORMAL ? await useTcpDump(page, link, Mode.NORMAL) : await useTcpDump(page, link, Mode.VPN);
        // const metrics = await page.metrics();
        // if (debug) console.log(JSON.stringify(metrics));
        // return metrics;
        const load = mode === Mode.NORMAL ? await useTcpDump(page, link, Mode.NORMAL) : await useTcpDump(page, link, Mode.VPN);
        return load;
    } catch (error) {
        console.error(`launchNormal: ${error}`);
        throw error;
    } finally {
        await browser.close();
    }
  
}

async function launchTor(link) {
    const args = ["--proxy-server=socks5://127.0.0.1:9050"];
    const browser = await puppeteer.launch({ args });
    const page = await browser.newPage();

    try {
        // await useTcpDumpTor(page, link);
        // const metrics = await page.metrics();
        // return metrics;
        const load = await useTcpDump(page, link, Mode.TOR);
        return load;
    } catch (error) {
        console.error(`launchTor: ${error}`);
        throw error;
    } finally {
        await browser.close();
    }

}

async function useTcpDump(page, link, mode) {
    let tcpdumpProcess;
    if (mode === Mode.NORMAL) {
        const host = link.split("/")[2];
        tcpdumpProcess = spawn("sudo", [
            "tcpdump",
            "-i",
            "en0",
            "host",
            host,
            "-w",
            "capture.pcap",
        ]);
    } else if (mode === Mode.TOR) {
        tcpdumpProcess = spawn("sudo", [
            "tcpdump",
            "-i",
            "lo0",
            "port",
            "9050",
            "-w",
            "capture.pcap",
        ]);
    } else {
        const host = link.split("/")[2];
        tcpdumpProcess = spawn("sudo", [
            "tcpdump",
            "-i",
            "utun8",
            "host",
            host,
            "-w",
            "capture.pcap",
        ]);
    }

    tcpdumpProcess.stdout.on("data", (data) => {
        if (debug) console.log(`tcpdump stdout: ${data}`);
    });

    tcpdumpProcess.stderr.on("data", (data) => {
        if (debug) console.error(`tcpdump stderr: ${data}`);
    });

    tcpdumpProcess.on("exit", (code) => {
        if (debug) console.log(`tcpdump exited with code ${code}`);
    });

    try {
        const start = new Date();
        await page.goto(link);
        const end = new Date();
        const diff = (end - start) / 1000;
        if (debug) console.log(`Load time: ${diff}`);
        return diff;
    } catch (error) {
        console.error(`useTcpDump: ${error}`);
        throw error;
    } finally {
        tcpdumpProcess.kill();
    }

}

// async function useTcpDumpTor(page, link) {
//     const tcpdumpProcess = spawn("sudo", [
//         "tcpdump",
//         "-i",
//         "lo0",
//         "port",
//         "9050",
//         "-w",
//         "capture.pcap",
//     ]);

//     tcpdumpProcess.stdout.on("data", (data) => {
//         if (debug) console.log(`tcpdump stdout: ${data}`);
//     });

//     tcpdumpProcess.stderr.on("data", (data) => {
//         if (debug) console.error(`tcpdump stderr: ${data}`);
//     });

//     tcpdumpProcess.on("exit", (code) => {
//         if (debug) console.log(`tcpdump exited with code ${code}`);
//     });

//     try {
//         await page.goto(link);
//     } catch (error) {
//         console.error(`useTcpDumpTor: ${error}`);
//         throw error;
//     } finally {
//         tcpdumpProcess.kill();
//     }

// }

// async function useTcpDumpNormal(page, link) {
//     const host = link.split("/")[2];
//     const tcpdumpProcess = spawn("sudo", [
//         "tcpdump",
//         "-i",
//         "en0",
//         "host",
//         host,
//         "-w",
//         "capture.pcap",
//     ]);

//     tcpdumpProcess.stdout.on("data", (data) => {
//         if (debug) console.log(`tcpdump stdout: ${data}`);
//     });

//     tcpdumpProcess.stderr.on("data", (data) => {
//         if (debug) console.error(`tcpdump stderr: ${data}`);
//     });

//     tcpdumpProcess.on("exit", (code) => {
//         if (debug) console.log(`tcpdump exited with code ${code}`);
//     });

//     try {
//         await page.goto(link);
//     } catch (error) {
//         console.error(`useTcpDumpTorNormal: ${error}`);
//         throw error;
//     } finally {
//         tcpdumpProcess.kill();
//     }

// }

export { launchNormal, launchTor };