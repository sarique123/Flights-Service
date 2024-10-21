const { Logger } = require('../config');

class CrudRepository {
    constructor(model){
        this.model = model;
    }
    
    async create(data){
        const response = await this.model.create(data);
        return response;
    }

    async delete(data){
        try {
            const response = await this.model.destroy({
                where: {
                    id:data
                }
            });
            return response;
        } catch (error) {
            Logger.error('something went wrong in the CRUD Repo : Destroy');
            throw error;
        }
    }

    async get(data){
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error('something went wrong in the CRUD Repo : Get');
            throw error;
        }
    }

    async getAll(data){
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error('something went wrong in the CRUD Repo : GetAll');
            throw error;
        }
    }

    async update(data,id){     //  data -> object{col : val,....}
        try {
            const response = await this.model.update(data,{
                where:{
                    id:id
                }
            });
            return response;
        } catch (error) {
            Logger.error('something went wrong in the CRUD Repo : GetAll');
            throw error;
        }
    }
}

module.exports = CrudRepository;