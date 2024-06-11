const express = require("express");
const serverHttp = express();
const os = require("os");

serverHttp.use(express.static("./public"));

const user = {
    logged: true,
    admin: false
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

const routerOs = express.Router();

routerOs.get("/userinfo", (request, response) => {
    response.send(os.userInfo());
});

routerOs.get("/network", checkLogged, checkAdmin, (request, response) => {
    response.send(os.networkInterfaces());
});

routerOs.get("/memory", checkLogged, (request, response) => {
    response.send(os.totalmem());
});

routerOs.get("/memory/free", (request, response) => {
    response.send(os.freemem());
});

serverHttp.get("/api/:qualcosa/ok/:altro", (request, response) => {
    response.send(request.params["qualcosa"] + " " + request.params["altro"] + " " + request.query["id"]);
});

serverHttp.use("/api/os/", routerOs);

serverHttp.listen(9999, () => { console.log("Servizio avviato sulla porta 9999"); });