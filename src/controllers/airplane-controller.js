const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const { Errorresponse, SuccessResponse } = require('../utils/common');


/*
 POST :/airplanes
 req-body : {modelNumber : 'airbus123',capacity: 200}
 */

async function createAirplane(req,res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res
                 .status(StatusCodes.CREATED)
                 .json(SuccessResponse);

    } catch (error) {
        Errorresponse.error = error;
        return res
        .status(error.statusCode)
        .json(Errorresponse);
    }
}

module.exports = {
    createAirplane
}