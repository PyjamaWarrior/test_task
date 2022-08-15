const router = require('express').Router();

const { mathController } = require('../controllers');

router.get('/:number', mathController.getValue);

module.exports = router;
