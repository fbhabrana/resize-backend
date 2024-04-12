const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  // Define your schema fields here
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
