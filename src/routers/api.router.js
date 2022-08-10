const router = require('express').Router();

const testRouter = require('./test.router');

router.use('/get', testRouter);

module.exports = router;
