const Region = require('../models/region');

getRegions = async (req, res) => {
    await Region.find({}, (err, regions) => {
        if (err){
            return res
                .status(400)
                .json({
                    success: false,
                    error: err
                })
        }
        if (!regions.length) {
            return res
                .status(404)
                .json({
                    success: false,
                    messsage: `Region not found`
                })
        }

        return res
            .status(200)
            .json({
                success: true,
                data: regions
            })
    })
}

getRegion = async (req, res) => {
    params = req.query
    
    if(params.name) {
        params.name = params.name.toLowerCase();
        options = params.name.split(' ');
        params.name = `${ options[0].charAt(0).toUpperCase() }${ options[0].slice(1)} ${ options[1].charAt(0).toUpperCase() }${ options[1].slice(1)}`
    }
    
    if(params.code) {
        params.name = params.name.toUperCase();
    }

    console.log(params)
    const region = await Region.findByTag(params);
    if (!region.length) {
        return res
            .status(404)
            .json({
                success: false,
                messsage: `Region not found`
            })
    }
    return res
            .status(200)
            .json({
                success: true,
                data: region
            })
}

module.exports = {
    getRegion,
    getRegions
}