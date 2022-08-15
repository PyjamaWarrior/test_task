const router = require('express').Router();

const mathRouter = require('./math.router');

router.use('/get', mathRouter);

module.exports = router;
