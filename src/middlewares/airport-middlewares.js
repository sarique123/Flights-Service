const { StatusCodes } = require('http-status-codes')

const { Errorresponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req,res,next){
    if(!req.body.name){
        Errorresponse.message = 'Something went wrong while creating airport';
        Errorresponse.error = new AppError(['Name not found in the ongoing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(Errorresponse);
    }
    if(!req.body.code){
        Errorresponse.message = 'Something went wrong while creating airport';
        Errorresponse.error = new AppError(['Code not found in the ongoing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(Errorresponse);
    }
    if(!req.body.cityId){
        Errorresponse.message = 'Something went wrong while creating airport';
        Errorresponse.error = new AppError(['CityId number not found in the ongoing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(Errorresponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}