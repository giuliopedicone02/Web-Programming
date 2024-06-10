const EventEmitter = require("events");
const os = require("os");
const http = require("http");
const serverWebEvents = new EventEmitter();

serverWebEvents.on("richiestaHTTP", (request, response) => {
    console.log("Richiesta da parte di un client HTTP");

    switch (request.url) {
        case "/":
            serverWebEvents.emit("richiestaRoot", request, response);
            break;
        case "/network":
            serverWebEvents.emit("richiestaNetwork", request, response);
            break;
        case "/memory":
            serverWebEvents.emit("richiestaMemoria", request, response);
            break;
    }
    response.end();
});

serverWebEvents.on("richiestaRoot", (request, response) => {
    response.write(JSON.stringify(os.userInfo()));
    response.end();
});

serverWebEvents.on("richiestaNetwork", (request, response) => {
    response.write(JSON.stringify(os.networkInterfaces()));
    response.end();
});

serverWebEvents.on("richiestaMemoria", (request, response) => {
    response.write(JSON.stringify(os.totalmem()));
    response.end();
});

const createServer = (port) => {
    const httpServer = http.createServer((request, response) => {
        serverWebEvents.emit("richiestaHTTP", request, response);
    });

    return httpServer;
}

module.exports = { createServer, serverWebEvents };

