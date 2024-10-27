const { StatusCodes } = require('http-status-codes')
const { timeCompare } = require('../utils/helpers/date-time-helper');
const { Errorresponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req,res,next){
    if(!req.body.flightNumber){
        Errorresponse.message = 'Something went wrong while creating flight';
        Errorresponse.error = new AppError(['Flight Number not found in the ongoing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(Errorresponse);
    }
    if(!req.body.airplaneId){
        Errorresponse.message = 'Something went wrong while creating flight';
        Errorresponse.error = new AppError(['Airplane Id not found in the ongoing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(Errorresponse);
    }
    if(!req.body.arrivalAirportId){
        Errorresponse.message = 'Something went wrong while creating flight';
        Errorresponse.error = new AppError(['Arrival AirportId number not found in the ongoing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(Errorresponse);
    }
    if(!req.body.departureAirportId){
        Errorresponse.message = 'Something went wrong while creating flight';
        Errorresponse.error = new AppError(['Departure AirportId not found in the ongoing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(Errorresponse);
    }
    if(!req.body.arrivalTime){
        Errorresponse.message = 'Something went wrong while creating flight';
        Errorresponse.error = new AppError(['Arrival Time not found in the ongoing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(Errorresponse);
    }
    if(!req.body.departureTime){
        Errorresponse.message = 'Something went wrong while creating flight';
        Errorresponse.error = new AppError(['Departure Time number not found in the ongoing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(Errorresponse);
    }
    if(!req.body.ticketPrice){
        Errorresponse.message = 'Something went wrong while creating flight';
        Errorresponse.error = new AppError(['Ticket Price not found in the ongoing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(Errorresponse);
    }
    if(!req.body.totalSeats){
        Errorresponse.message = 'Something went wrong while creating flight';
        Errorresponse.error = new AppError(['Total Seats not found in the ongoing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(Errorresponse);
    }

    if(!timeCompare(req.body.departureTime,req.body.arrivalTime)){
        Errorresponse.message = 'Something went wrong while creating flight';
        Errorresponse.error = new AppError(['Arrival Time can not be lesser or equal than the Departure Time'],StatusCodes.BAD_REQUEST);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(Errorresponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}