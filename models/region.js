const mongoose = require('mongoose')
let Region;
const RegionSchema = new mongoose.Schema({
    name: "string",
    code: "string"
})

RegionSchema.statics.findByTag = function findByTag(tag) {
    return Region.find(tag).exec();
};

Region = mongoose.model('regions', RegionSchema);
module.exports = Region