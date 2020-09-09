const router = require('express').Router();
const queries = require('./stops.queries');

router.get('/', async (req, res) => {
    const stops = await queries.getAllStops();
    res.send(stops);
});

router.post('/', async (req, res, next) => {
    const stop = req.body;
    try {
        const inserted = await queries.addStop(stop);
        res.send(inserted);
    } catch (error) {
        next(error)
    }
});

module.exports = router;