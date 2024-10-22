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

/*
 GET :/airplanes/
 req-body : {}
 */

async function getAllAirplanes(req,res) {
    try {
        const airplanes = await AirplaneService.getAllAirplanes();
        SuccessResponse.data = airplanes;
        return res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse);
    } catch (error) {
        Errorresponse.error = error;
        return res
        .status(error.statusCode)
        .json(Errorresponse);
    }
}

/*
 GET :/airplanes/:id
 req-body : {}
 */
async function getAirplane(req,res) {
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse);
    } catch (error) {
        Errorresponse.error = error;
        return res
        .status(error.statusCode)
        .json(Errorresponse);
    }
}

/*
 DELETE :/airplanes/:id
 req-body : {}
 */
 async function destroyAirplane(req,res) {
    try {
        const airplane = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse);
    } catch (error) {
        Errorresponse.error = error;
        return res
        .status(error.statusCode)
        .json(Errorresponse);
    }
}

module.exports = {
    createAirplane,
    getAllAirplanes,
    getAirplane,
    destroyAirplane
} 