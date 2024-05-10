const {City} = require('../models/index')

class CityRepository{
    async createCity({name}){
        const city= await City.create({
            name
        })
        return city;
    }
    async deleteCity(cityId){
        const city=await City.drop({
            where :{
                id:cityId
            }
        })
    }
    async updateCity(cirtyId,name){
        const city = await City.update({
            where:{
                id:cityId
            }
        })
        return city
    }
    async getCity(cityId){
        const city = await City.findByPk(cityId);
        return city;
    }
}

module.exports =  CityRepository;