// const { createServer, serverWebEvents } = require("./my_modules/httpServer");

// const httpServer = createServer();
// httpServer.listen(9999);

/**
 * EXPRESS FRAMEWORK
 */

//Usare npm install per installare tutti i pacchetti che servono specificati nella sezione dependencies del file json

const express = require("express");
const serverHttp = express();
const os = require("os");

serverHttp.get("/", (request, response) => {
    response.send(os.userInfo());
});

serverHttp.get("/network", (request, response) => {
    response.send(os.networkInterfaces());
});

serverHttp.get("/memory", (request, response) => {
    response.send(os.totalmem());
});

serverHttp.get("/memory/free", (request, response) => {
    response.send(os.freemem());
});

serverHttp.listen(9999, () => { console.log("Servizio avviato sulla porta 9999"); });