const CrudRepository = require('./crud-reposiory');
const { City } = require('../models');

class CityRepository extends CrudRepository{
    constructor(){ 
        super(City);
    }
}

module.exports = CityRepository;