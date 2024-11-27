import express from "express";

const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("A Torre Eiffel iluminada à noite, com milhares de luzes cintilando, criando um espetáculo mágico em Paris.");
});

// localhost:3000/api

// npm init es6 -y
// npm i express

// https://guilhermeonrails.github.io/casadocodigo/livros.json

// ctrl + c derruba servidor