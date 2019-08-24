var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'niko',
    password: '123456',
    database: 'nikoserver'
})



app.get('/', (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM USER', (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
    });
    connection.end();
});

app.listen(port, () => {
    console.log('Listening on port ' + (process.env.PORT || 3000));
});