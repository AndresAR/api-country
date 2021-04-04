const express = require('express');
const router = express.Router()

const CountryCtrl = require('../../controllers/Countries');
const RegionCtrl = require('../../controllers/Regions');

// Country Routes 
router.get('/countries', CountryCtrl.getCountries);
router.get('/country', CountryCtrl.getCountry);

//Region Roytes
router.get('/regions', RegionCtrl.getRegions);
router.get('/region', RegionCtrl.getRegion)

module.exports = router