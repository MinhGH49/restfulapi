let mongoose = require('mongoose')


let drugSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    uppercase: true
  },
  name: String,
  prescribe: String,
  contraindication: String,
  ingredients: String,
  manufacturer: String,
  importer: String,
  packaging: String,
});

module.exports = mongoose.model('Drug', drugSchema)
