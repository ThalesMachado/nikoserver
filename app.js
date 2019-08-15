var express = require('express');
var app = express();


app.get('/', (req, res) => {
    let response = {"Nome": "Thales",
    "Sobrenome": "Machado",
    "Idade": 23,
    "Cidade Natal": "Itaboraí",
    "Data de Nascimento": "20/11/1995"}
    res.send(response);
});

app.listen(port, () => {
    console.log('Listening on port ');
});