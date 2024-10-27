const { StatusCodes } = require('http-status-codes');
const { FlightService } = require('../services');
const { Errorresponse, SuccessResponse } = require('../utils/common');


/*
 POST :/flights

 req-body : {
 flightNumber: 'UK 808',
 airplaneId: 1,
 arrivalAirportId: 'DEL',
 departureAirportId: 'MUM',
 arrivalTime: 2024:10:27 12:30:00
 departureTime: 2024:10:27 4:00:00
 ticketPrice: 2999
 totalSeats: 400
 boardingGate: GATE-3A  (Not Compulsory)
}

 */

async function createFlight(req,res) {
    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureAirportId: req.body.departureAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            ticketPrice: req.body.ticketPrice,
            totalSeats: req.body.totalSeats,
            boardingGate: req.body.boardingGate
        });
        SuccessResponse.data = flight;
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
    createFlight
} 