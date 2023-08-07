const express = require("express");
const {
  postDistrict,
  getDistricts,
  getDistrict,
  patchDistrict,
  deleteDistrict,
} = require("./_controllers");
const isLoggedIn = require("../../shared/auth/is-loggedin");

const router = express.Router();

router.post("/districts", isLoggedIn, postDistrict);
router.get("/districts", isLoggedIn, getDistricts);
router.get("/districts/:id", isLoggedIn, getDistrict);
router.patch("/districts/:id", isLoggedIn, patchDistrict);
router.delete("/districts/:id", isLoggedIn, deleteDistrict);

module.exports = router;
