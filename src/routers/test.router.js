const router = require('express').Router();

const { testController } = require('../controllers');

router.get('/:number', testController.getValue);

module.exports = router;
