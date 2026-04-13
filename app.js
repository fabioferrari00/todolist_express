
//importo express e creo l'istanza dell'app
const express = require("express");

//importo cors
const cors = require('cors');

const app = express();

//definisco la porta su cui far girare l'app
const port = process.env.PORT;

//importo il file router
const todoRoutes = require('./routes/todos');

//dico all'app di usare cors
app.use(cors({ origin: process.env.FE_APP }))

app.use(express.json());

//definisco la rotta per i movies
app.use("/api/todos", todoRoutes);

//dico al server di rimanere in ascolto
app.listen(port, () => {
  console.log("server in ascolto")
});