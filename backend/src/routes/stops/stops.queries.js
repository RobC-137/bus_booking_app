const Stops = require('../../models/stops.models');

function getAllStops() {
    return Stops.query();
}

function addStop(stop) {
    return Stops.query().insert(stop)
}

module.exports = {
    getAllStops,
    addStop
}