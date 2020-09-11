const router = require('express').Router();
const queries = require('./stops.queries');
const utils = require('../../utils');

router.get('/', async (req, res) => {
    try {
        const stops = await queries.getAllStops();
        res.send(stops);

    } catch (error) {
        next(error)
    }
});

router.post('/', async (req, res, next) => {
    const stop = req.body;
    try {
        if (utils.objectIsEmpty(stop)) throw new Error('No body')
        const inserted = await queries.addStop(stop);
        res.send(inserted);
    } catch (error) {
        next(error)
    }
});

router.patch('/:id', async (req, res, next) => {
    const { id } = req.params;
    const props = req;

    console.log(body);

    try {
        if (utils.objectIsEmpty(props)) throw new Error('No id or body')
        await queries.patchStop(id, props);
        res.send('patched')
    } catch (error) {
        next(error)
    }

});

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params

    try {
        if (!id) throw new Error('No id provided')
        await queries.deleteStop(id)
        res.send('deleted');
    } catch (error) {
        next(error)
    }
})

module.exports = router;