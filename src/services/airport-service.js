const { AirportRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const airportRepository = new AirportRepository();

async function createAirport(data){
    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        if(error.name === 'SequelizeValidationError'){
            let explanation = [];
           
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
          
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airport Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllAirports() {
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the airports',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id) {
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested is not present',error.statusCode);
        }
        throw new AppError('Cannot fetch data of the airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id) {
    try {
        const airport = await airportRepository.destroy(id);
        return airport;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested to delete is not present',error.statusCode);
        }
        throw new AppError('Cannot fetch data of the airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(data,id) {
    try {
        const airport = await airportRepository.update(data,id);
        return airport;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested to update is not present',error.statusCode);
        }
        throw new AppError('Cannot fetch data of the airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirport,
    getAllAirports,
    getAirport,
    destroyAirport,
    updateAirport
}