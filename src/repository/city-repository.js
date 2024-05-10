const {City} = require('../models/index')

class CityRepository{
    async createCity({name}){
        const city= await City.create({
            name
        })
        return city;
    }
    async deleteCity({cityId}){
        const city=await City.drop({
            where :{
                id:cityId
            }
        })
    }
}

module.exports =  CityRepository;