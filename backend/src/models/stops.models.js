const { Model } = require('objection');
const tableNames = require('../constants/tableNames');

class Stops extends Model {
    static get tableName() {
        return tableNames.stops;
    }
}

module.exports = Stops;