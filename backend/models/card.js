
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: String,
  jobTitle: String,
  companyName: String,
  email: String,
  phoneNumber: String,
  address: String,
  image: String, 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Card', cardSchema);
