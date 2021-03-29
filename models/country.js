const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Country = new Schema(
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




module.exports = mongoose.model('countries', Country);