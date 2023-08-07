const express = require("express");
const {
  postCity,
  getCities,
  getCity,
  patchCity,
  deleteCity,
} = require("./_controllers");
const isLoggedIn = require("../../shared/auth/is-loggedin");

const router = express.Router();

router.post("/cities", isLoggedIn, postCity);
router.get("/cities", isLoggedIn, getCities);
router.get("/cities/:id", isLoggedIn, getCity);
router.patch("/cities/:id", isLoggedIn, patchCity);
router.delete("/cities/:id", isLoggedIn, deleteCity);

module.exports = router;
