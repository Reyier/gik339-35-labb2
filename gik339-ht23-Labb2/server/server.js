const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

const db = new sqlite3.Database("./gik339-labb2.db");

server.get("/users", (req, res) => {
  const query = "SELECT * FROM users";

  db.all(query, (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(rows); 
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});


// Uppgift 4 Testa Backend 
// Uppgift 5 



// test för Content security policy
