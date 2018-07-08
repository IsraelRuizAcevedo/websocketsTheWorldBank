const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { port, url } = require('./config/conexion');
const router = require('./routes/routes');

const app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

// IO = esta es la comunicacion del backend
module.exports.io = io;
require('./sockets/socket');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));

app.use('/tas', router);
app.use('/pr', router);

mongoose.connect(url, { useNewUrlParser: true })
    .then(res => {
        console.log('Conexion a la BD exitosa')
        http.listen(port, () => {
            console.log(`Servidor corriendo en el puerto ${port}`);
        })
    })
    .catch(err => {
        console.log(err);
    })