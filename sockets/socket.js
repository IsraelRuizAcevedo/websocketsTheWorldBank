const { io } = require('../app');
const Precipitacion = require('./../models/precipitacion');
const Temperatura = require('./../models/temperatura');

io.on('connection', function (socket) {
    console.log('a user connected');
    let mediciones = [];
    let basinAleatorio = Math.floor(Math.random() * (468 - 1)) + 1;
    mediciones.push(basinAleatorio);
    Precipitacion.find({ WBHUC: basinAleatorio })
        .then(precipitacion => {
            mediciones.push(precipitacion)
            Temperatura.find({ WBHUC: basinAleatorio })
                .then(temperatura => {
                    mediciones.push(temperatura)
                    socket.emit('mediciones', mediciones);
                })
        })
        .catch(err => {
            console.log(err)
        })

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    setInterval(() => {
        mediciones = [];
        basinAleatorio = Math.floor(Math.random() * (468 - 1)) + 1;
        mediciones.push(basinAleatorio);
        Precipitacion.find({ WBHUC: basinAleatorio })
            .then(precipitacion => {
                mediciones.push(precipitacion)
                Temperatura.find({ WBHUC: basinAleatorio })
                    .then(temperatura => {
                        mediciones.push(temperatura)
                        socket.broadcast.emit('mediciones', mediciones);
                    })
            })
            .catch(err => {
                console.log(err)
            })

    }, 10000);
});