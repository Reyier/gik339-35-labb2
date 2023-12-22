// uppgift 2 punkt 1. Importerar Express och SQLite-moduler
const express = require("express");



//npm install sqlite3 för installering i terminal
//uppgift 3 Importerar SQLite3 
const sqlite3 = require("sqlite3").verbose();



// Uppgift 2.  Skapar en Express-serverinstans
const server = express();


server.use(express.json()); // Hantera JSON-data
server.use(express.urlencoded({ extended: false })); // Hantera URL-kodad data
server.use((req, res, next) => { // Hantera CORS-headers
  res.header("Access-Control-Allow-Origin", "*"); // Tillåt alla domäner
  res.header("Access-Control-Allow-Headers", "*"); // Tillåt alla headers
  res.header("Access-Control-Allow-Methods", "*"); // Tillåt alla metoder
  next();
});







// Uppgift 3: Skapa en databaskoppling
const db = new sqlite3.Database("./gik339-labb2.db");

// uppgift 2 punkt 3 och 4 : Definierar en GET-endpoint för "/users"
server.get("/users", (req, res) => {
  const query = "SELECT * FROM users"; // SQL-fråga för att hämta alla användare

  // Kör SQL-frågan på databasen
  db.all(query, (err, rows) => {
    if (err) {
      // vid fel skickas en felstatus och ett meddelande
      res.status(500).send(err.message);
    } else {
      //  Rad som skickar response till klienten ssom gjorde förfrågan
      // Objeketet res.
      res.json(rows);
    }
  });
});

//uppgift 2 punkt 2: Ange vilken port servern ska lyssna på och starta servern
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});


