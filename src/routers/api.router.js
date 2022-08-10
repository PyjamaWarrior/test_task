const router = require('express').Router();

const testRouter = require('./test.router');

router.use('/', testRouter);

module.exports = router;
