const express = require('express');

const { AirportMiddleWares } = require('../../middlewares');

const {AirportController} = require('../../controllers');


const router = express.Router();


//   /api/v1/airports/   POST
router.post('/',
    AirportMiddleWares.validateCreateRequest,
    AirportController.createAirport);

//   /api/v1/airports/   GET
router.get('/', AirportController.getAllAirports);

//   /api/v1/airplanes/:id   GET
router.get('/:id', AirportController.getAirport);

//   /api/v1/airports/:id   DELETE
router.delete('/:id', AirportController.destroyAirport);

//   /api/v1/airports/:id   PATCH
router.patch('/:id', AirportController.updateAirport);
    
module.exports = router;