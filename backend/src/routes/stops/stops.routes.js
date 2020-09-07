const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('stops');
});

module.exports = router;