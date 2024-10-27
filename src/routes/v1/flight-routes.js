const express = require('express');

const { FlightMiddlewares } = require('../../middlewares');

const { FlightController } = require('../../controllers');


const router = express.Router();


//   /api/v1/flights/   POST
router.post('/',
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight);
    
module.exports = router;