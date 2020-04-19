const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('Car', CarSchema)