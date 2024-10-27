const { Airport } = require('../models');
const CrudRepository = require('./crud-reposiory');

class AirportRepository extends CrudRepository {
    constructor(){
        super(Airport);
    }
}

module.exports = AirportRepository;