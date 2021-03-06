const { Model } = require('objection');
const tableNames = require('../constants/tableNames');

class Stop extends Model {
    static get tableName() {
        return tableNames.stops;
    }
}

module.exports = Stop;