const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/precipitaciones/:id', controllers.getPrecipitacion);
router.get('/temperaturas/:id', controllers.getTemperatura);

module.exports = router;