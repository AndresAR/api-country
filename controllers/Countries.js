const Country = require('../models/country');

getCountries = async (req, res) => {
    await Country.find({}, (err, countries) => {
        if (err) {
            return res
                .status(400)
                .json({
                    success: false,
                    error: err
                })
        }
        if (!countries.length) {
            return res
                .status(404)
                .json({
                    success: false,
                    messsage: `Country not found`
                })
        }

        return res
            .status(200)
            .json({
                success: true,
                data: countries
            })
    })
}

getCountry = async (req, res) => {
    params = req.query
    
    if(params.name) {
        params.name = params.name.toLowerCase();
        params.name = params.name.charAt(0).toUpperCase() + params.name.slice(1)
    }
    
    if(params.code) {
        params.name = params.name.toUperCase();
    }

    if(params.capital) {
        params.capital = params.capital.toLowerCase();
        params.capital = params.capital.charAt(0).toUpperCase() + params.capital.slice(1)
    }

    const country = await Country.findByTag(params);
    if (!country.length) {
        return res
            .status(404)
            .json({
                success: false,
                messsage: `Country not found`
            })
    }
    return res
            .status(200)
            .json({
                success: true,
                data: country
            })
}

module.exports = {
    getCountries,
    getCountry
}