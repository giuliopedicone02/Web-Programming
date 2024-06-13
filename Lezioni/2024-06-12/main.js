const express = require("express");
const serverHttp = express();
const webSocketLib = require("ws");

serverHttp.use(express.static("./public"));
serverHttp.use(express.urlencoded({ extent: false }));
serverHttp.use(express.json());

const wsServer = new webSocketLib.Server({ noServer: true });

const clients = [];

wsServer.on('connection', socket => {
    clients.push(socket);
    console.log("Qualcuno si è collegato");
    socket.on('message', (message) => {
        for (const client of clients) {
            client.send(message.toString());
        }
        console.log(message.toString())
    });
});


const httpSer = serverHttp.listen(9999, () => {
    console.log("Servizio avviato sulla porta 9999");
});

httpSer.on('upgrade', (request, socket, head) => {
    wsServer.handleUpgrade(request, socket, head, socket => {
        wsServer.emit('connection', socket, request);
    });
});
