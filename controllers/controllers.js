const Precipitacion = require('./../models/precipitacion');
const Temperatura = require('./../models/temperatura');

const getPrecipitacion = (req, res) => {
    const id = req.params.id;
    Precipitacion.find({ WBHUC: id })
    .then(precipitacion => {
        res.status(200).json({
            precipitacion
        })
    })
        .catch(err => {
            res.status(404).json({
                err
            })
        })
}

const getTemperatura = (req, res) => {
    const id = req.params.id;
    Temperatura.find({ WBHUC: id })
    .then(temperatura => {
        res.status(200).json({
            temperatura
        })
    })
        .catch(err => {
            res.status(404).json({
                err
            })
        })
}

module.exports = {
    getPrecipitacion,
    getTemperatura
}

