const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services');
const { Errorresponse, SuccessResponse } = require('../utils/common');


/*
 POST :/city
 req-body : {name : 'London'}
 */

 async function createCity(req,res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name,
        });
        SuccessResponse.data = city;
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
 GET :/cities/
 req-body : {}
 */

 async function getAllCities(req,res) {
    try {
        const cities = await CityService.getAllCities();
        SuccessResponse.data = cities;
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
 GET :/cities/:id
 req-body : {}
 */
async function getCity(req,res) {
    try {
        const city = await CityService.getCity(req.params.id);
        SuccessResponse.data = city;
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
 DELETE :/cities/:id
 req-body : {}
 */
 async function destroyCity(req,res) {
    try {
        const city = await CityService.destroyCity(req.params.id);
        SuccessResponse.data = city;
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
 PATCH :/cities/:id
 req-body : {name : Mumbai}
 */
 async function updateCity(req,res) {
    try {
        const city = await CityService.updateCity({
            name: req.body.name
        },req.params.id);
        SuccessResponse.data = city;
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
    createCity,
    destroyCity,
    updateCity,
    getCity,
    getAllCities
}