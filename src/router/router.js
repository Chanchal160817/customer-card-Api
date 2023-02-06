const express = require('express');
const router = express.Router();
const { createCustomer, getCustomer, deleteCustomer } = require('../controller/customerController')
const {createCard} = require('../controller/cardController')

router.post('/customer',createCustomer)
router.get('./customer',getCustomer)
router.delete('/customer',deleteCustomer)
router.post('/card',createCard)
module.exports = router;