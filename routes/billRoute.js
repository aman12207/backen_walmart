const express = require('express');
const router = express.Router();
const {createBills} = require('../controllers/billController');

router.route('/bill/new').get(createBills);

module.exports = router;