const express = require('express');
const router = express.Router();
const {createBills} = require('../controllers/billController');

router.route('/bill/new').post(createBills);

module.exports = router;