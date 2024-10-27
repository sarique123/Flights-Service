const CrudRepository = require('./crud-reposiory');
const { Flight } = require('../models');

class FlightRepository extends CrudRepository {
    
    constructor(){
        console.log("In repository");
        super(Flight);
    }
}

module.exports = FlightRepository;