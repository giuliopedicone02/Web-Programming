const logger = require("./logger.js");
console.log("Ciao!");

const os = require("os");

console.log(os.totalmem(), os.freemem());
console.log(os.cpus());
console.log(os.arch());
console.log(os.homedir());
console.log(os.networkInterfaces());

logger.log("Ciao");

const http = require("http");

const httpServer = http.createServer((requests, responses) => {

    switch (requests.url) {
        case "/":
            responses.write(JSON.stringify(os.userInfo()));
            break;
        case "/network":
            responses.write(JSON.stringify(os.networkInterfaces()));
            break;
        case "/memory":
            responses.write(JSON.stringify(os.totalmem()));
            break;
        case "/memory/free":
            responses.write(JSON.stringify(os.freemem()));
            break;
        default:
            responses.write("API REST not found!");
            break;
    }

    // console.log(requests.headers, requests.method, requests.url);
    // responses.write(os.totalmem() + " " + os.freemem() + "<br>");
    // responses.write(JSON.stringify(os.networkInterfaces()));

    responses.end();
});

httpServer.listen(9999); //Andare sul browser e digitare nella barra delle URL localhost:9999
