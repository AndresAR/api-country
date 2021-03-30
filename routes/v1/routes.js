const express = require('express');
const router = express.Router()

const CountryCtrl = require('../../controllers/Countries');

// Country Routes 
router.get('/countries', CountryCtrl.getCountries);




module.exports = router