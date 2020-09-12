const router = require('express').Router();
const queries = require('./cities.queries');
const utils = require('../../utils');

router.get('/', async (req, res, next) => {
    try {
        const cities = await queries.getAllcities();
        res.send(cities);

    } catch (error) {
        next(error)
    }
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        if (!id) throw new Error('No id');
        const city = await queries.getCity(id);
        res.send(city)
    } catch (error) {
        next(error)
    }
});


module.exports = router;