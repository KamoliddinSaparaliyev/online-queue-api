const { boolean } = require('joi');
const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Region",
    required: true,
  }
});

const District = mongoose.model('District', districtSchema);

module.exports = District;
