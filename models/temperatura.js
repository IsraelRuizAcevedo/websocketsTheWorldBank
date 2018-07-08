const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const temperaturaSchema = new Schema({
    WBHUC: Number,
    Jan_Temp: Number,
    Feb_temp: Number,
    Mar_temp: Number,
    Apr_Temp: Number,
    May_temp: Number,
    Jun_Temp: Number,
    July_Temp: Number,
    Aug_Temp: Number,
    Sept_temp: Number,
    Oct_temp: Number,
    Nov_Temp: Number,
    Dec_temp: Number,
    Annual_temp: Number
},
    { collection: 'temperaturas' });

const Temperatura = mongoose.model('Temperatura', temperaturaSchema);

module.exports = Temperatura;