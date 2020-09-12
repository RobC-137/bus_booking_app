const City = require('../../models/city.models');

function getAllcities() {
    return City.query();
}

function getCity(id) {
    return City.query().where({ id }).first()
}



module.exports = {
    getAllcities,
    getCity,
}