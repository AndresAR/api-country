const mongoose = require('mongoose')
let Country;
const CountrySchema = new mongoose.Schema(
  {
    name: String,
    code: String,
    capital: String,
    region: String,
    currency: {
        code: { type: String },
        name: { type: String },
        symbol: { type: String },

    },
    language: {
        code: { type: String },
        name: { type: String},
    },
    flag: String
  }
);

CountrySchema.statics.findByTag = function findByTag(tag) {
  return Country.find(tag).exec();
};


Country = mongoose.model('countries', CountrySchema);
module.exports = Country