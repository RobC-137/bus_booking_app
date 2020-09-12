const { Model } = require('objection');
const tableNames = require('../constants/tableNames');

class City extends Model {
    static get tableName() {
        return tableNames.cities;
    }
}

module.exports = City;