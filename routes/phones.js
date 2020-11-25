const express = require('express');
const router = express.Router();
const controller = require('../controllers/base.controller');
const phonesController = require('../controllers/phones.controller');


router.get('/', controller.base);
router.get('/phones', phonesController.list);


module.exports = router;