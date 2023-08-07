const express = require("express");
const {
  postRegion,
  getRegions,
  getRegion,
  patchRegion,
  deleteRegion,
} = require("./_controllers");
const isLoggedIn = require("../../shared/auth/is-loggedin");

const router = express.Router();

router.post("/regions", isLoggedIn, postRegion);
router.get("/regions", isLoggedIn, getRegions);
router.get("/regions/:id", isLoggedIn, getRegion);
router.patch("/regions/:id", isLoggedIn, patchRegion);
router.delete("/regions/:id", isLoggedIn, deleteRegion);

module.exports = router;
