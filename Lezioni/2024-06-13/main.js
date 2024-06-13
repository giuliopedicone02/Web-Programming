const express = require("express");

const serverHttp = express();

const listaLibri = [];
let lastId = 0;

serverHttp.use(express.static("./client"));

serverHttp.use(express.json());

serverHttp.get("/api/books", (request, response) => {
    response.json(listaLibri);
});

serverHttp.post("/api/books", (request, risposta) => {
    const libroNuovo = request.body;
    libroNuovo["id"] = lastId;
    listaLibri.push(libroNuovo);
    console.log("[",lastId,"]", "'"+libroNuovo.title+"' Libro aggiungo con successo");
    lastId++;
    risposta.send("Libro salvato");
});

serverHttp.delete("/api/books/:id", (request, response) => {
    const id = request.params["id"];
    for(const indiceLibro in listaLibri){
        if(listaLibri[indiceLibro].id == id){
            listaLibri.splice(indiceLibro, 1);
            break;
        }
    }

    response.send("Fatto")
});


serverHttp.all("*", (request, response) => {
    response.send("404");
});

serverHttp.listen(8080);