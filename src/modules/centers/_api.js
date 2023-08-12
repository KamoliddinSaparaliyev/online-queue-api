const express = require("express");
const {
  postCenter,
  getCenters,
  getCenter,
  patchCenter,
  deleteCenter,
} = require("./_controllers");
const isLoggedIn = require("../../shared/auth/is-loggedin");

const router = express.Router();

router.post("/centers", isLoggedIn, postCenter);
router.get("/centers", isLoggedIn, getCenters);
router.get("/centers/:id", isLoggedIn, getCenter);
router.patch("/centers/:id", isLoggedIn, patchCenter);
router.delete("/centers/:id", isLoggedIn, deleteCenter);

module.exports = router;
