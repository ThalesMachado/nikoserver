var express = require("express");

var pg = require("pg");
var port = process.env.PORT || 3000;

var app = express();

var Pool = new pg.Pool();

var conString = "postgres://evilthales:842537@localhost/database";

Pool.connect(conString, function(err, client, done) {
  if (err) {
    return console.error("error fetching client from pool", err);
  }
  client.query("SELECT $1::int AS number", ["1"], function(err, result) {
    done();
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows[0].number);
  });
});

app.get("/", (req, res) => {
  let response = {
    Nome: "Thales",
    Sobrenome: "Machado",
    Idade: 23,
    "Cidade Natal": "Itaboraí",
    "Data de Nascimento": "20/11/1995"
  };
  res.send(response);
});

app.listen(port, () => {
  console.log("Listening on port " + (process.env.PORT || 3000));
});
