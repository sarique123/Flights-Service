const { FlightRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        console.log("absdad" + error);
        
        if(error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError'){
            let explanation = [];
           
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
          
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Flight Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createFlight
}