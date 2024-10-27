const { StatusCodes } = require('http-status-codes');
const { AirportService } = require('../services');
const { Errorresponse, SuccessResponse } = require('../utils/common');


/*
 POST :/airports
 req-body : {name: 'Indira Gandhi Airport', code: 'IND', cityId: 2}
 */

async function createAirport(req,res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        SuccessResponse.data = airport;
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
 GET :/airports/
 req-body : {}
 */

async function getAllAirports(req,res) {
    try {
        const airports = await AirportService.getAllAirports();
        SuccessResponse.data = airports;
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
 GET :/airports/:id
 req-body : {}
 */
async function getAirport(req,res) {
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
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
 DELETE :/airports/:id
 req-body : {}
 */
 async function destroyAirport(req,res) {
    try {
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airport;
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
 PATCH :/airports/:id
 req-body : {capacity : 250}
 */
 async function updateAirport(req,res) {
    try {
        const airport = await AirportService.updateAirport({
            name: req.body.name,
            code: req.body.code
        },req.params.id);
        SuccessResponse.data = airport;
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
    createAirport,
    getAllAirports,
    getAirport,
    destroyAirport,
    updateAirport
} 