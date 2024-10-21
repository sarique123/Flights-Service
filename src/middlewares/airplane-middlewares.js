const { StatusCodes} = require('http-status-codes');

const {Errorresponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        Errorresponse.message = 'Something went wrong while creating airplane';
        Errorresponse.error = new AppError(['Model number not found in the ongoing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(Errorresponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}