const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const precipitacionSchema = new Schema({
    WBHUC: Number,
    Jan_precip: Number,
    Feb_precip: Number,
    Mar_precip: Number,
    Apr_precip: Number,
    May_precip: Number,
    Jun_precip: Number,
    July_precip: Number,
    Aug_precip: Number,
    Sept_precip: Number,
    Oct_precip: Number,
    Nov_precip: Number,
    Dec_precip: Number,
    Annual_precip: Number
},
    { collection: 'precipitaciones' });

const Precipitacion = mongoose.model('Precipitacion', precipitacionSchema);

module.exports = Precipitacion;