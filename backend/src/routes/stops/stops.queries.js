const Stops = require('../../models/stops.models');

function getAllStops() {
    return Stops.query();
}

function addStop(stop) {
    return Stops.query().insert(stop)
}

function deleteStop(id) {
    return Stops.query().deleteById(id);
}

function patchStop(id, prop) {
    return Stops.query().findById(id).patch(prop)
}

module.exports = {
    getAllStops,
    addStop,
    deleteStop,
    patchStop
}