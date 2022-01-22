const express = require("express");
const router = express.Router();

const {
  getAllNetworks,
  createNetwork,
  getNetwork,
  updateNetwork,
  deleteNetwork,
} = require("../controllers/Networks");

router.route("/").get(getAllNetworks).post(createNetwork);
router.route("/:id").get(getNetwork).patch(updateNetwork).delete(deleteNetwork);

//router.route("/").post(createNetwork).get(getAllNetworks);

module.exports = router;
