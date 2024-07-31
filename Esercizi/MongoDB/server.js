const express = require("express");
const { MongoClient } = require("mongodb");
const serverExpress = express();
const serverHTTP = require("http").Server(serverExpress);

const url = "mongodb://db:27017"; // Usa il nome del servizio Docker per il db
const dbName = "prova";

serverExpress.use(express.static("./www"));
serverExpress.use(express.json());

let db;
let client;
let dbConnected = false;

async function connectToDB() {
    try {
        client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log("Connesso a MongoDB");
        db = client.db(dbName);
        dbConnected = true; // Imposta lo stato di connessione a true
    } catch (err) {
        console.error("Errore durante la connessione a MongoDB", err);
        process.exit(1);
    }
}

connectToDB();

serverExpress.post("/api/newUser", async (req, resp) => {
    if (!dbConnected) {
        return resp.status(503).json({ message: "Database non disponibile" });
    }

    let data = req.body;
    console.log(data);

    try {
        const collection = db.collection("students");
        const result = await collection.insertOne(data);
        resp.status(201).json({ message: "Utente inserito correttamente", id: result.insertedId });
    } catch (err) {
        console.error(err);
        resp.status(500).json({ message: "Errore durante l'inserimento dell'utente" });
    }
});

serverExpress.get("/api/users", async (req, resp) => {
    if (!dbConnected) {
        return resp.status(503).json({ message: "Database non disponibile" });
    }

    try {
        const collection = db.collection("students");
        const users = await collection.find({}).toArray();
        resp.status(200).json(users);
    } catch (err) {
        console.error(err);
        resp.status(500).json({ message: "Errore durante la lettura degli utenti" });
    }
});

serverHTTP.listen(8080, () => {
    console.log("Server in ascolto sulla porta 8080");
});
