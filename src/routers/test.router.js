const router = require('express').Router();

const { testController } = require('../controllers');

router.get('/get/:number', testController.getValue);

module.exports = router;
