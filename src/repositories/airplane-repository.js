const CrudRepository = require('./crud-reposiory');
const { Airplane } = require('../models');

class AirplaneRepository extends CrudRepository{
    constructor(){ 
        super(Airplane);
    }
}

module.exports = AirplaneRepository;