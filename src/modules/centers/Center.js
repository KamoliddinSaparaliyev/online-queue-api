const mongoose = require("mongoose");

const medicalCenterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: mongoose.Types.ObjectId,
    ref: "City",
    required: true,
  },
  address: {
    street: String,
    number: Number,
  },
  contact: {
    phone: String,
  },
});

const MedicalCenter = mongoose.model("Center", medicalCenterSchema);

module.exports = MedicalCenter;
