const {Errorresponse} = require('../utils/common');

const {StatusCodes} =  require('http-status-codes');

const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body.name){
        Errorresponse.message = 'Something went wrong while creating city';
        Errorresponse.error = new AppError(['City name not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(Errorresponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}
