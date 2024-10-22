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

module.exports = {
    createCity
}