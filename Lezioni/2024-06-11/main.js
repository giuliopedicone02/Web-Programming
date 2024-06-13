const express = require("express");
const serverHttp = express();
const os = require("os");

serverHttp.use(express.static("./public"));

const user = {
    logged: true,
    admin: true
}

const checkLogged = (req, resp, next) => {
    if (user.logged) {
        next();
    }
    resp.status(401).send("Non sei loggato");
}

const checkAdmin = (req, resp, next) => {
    if (user.admin) {
        next();
    }
    resp.status(501).send("Non autorizzato");
}

serverHttp.get("/userinfo", (request, response) => {
    response.send(os.userInfo());
});

serverHttp.get("/network", checkLogged, checkAdmin, (request, response) => {
    response.send(os.networkInterfaces());
});

serverHttp.get("/memory", checkLogged, (request, response) => {
    response.send(os.totalmem().toString());
});

serverHttp.get("/memory/free", (request, response) => {
    response.send(os.freemem().toString());
});

serverHttp.get("/api/:qualcosa/ok/:altro", (request, response) => {
    response.send(request.params["qualcosa"] + " " + request.params["altro"] + " " + request.query["id"]);
});

serverHttp.listen(9999, () => { console.log("Servizio avviato sulla porta 9999"); });