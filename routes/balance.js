const express = require("express");
const router = express.Router();
const { getBalancesForUser } = require("../controller/balance_controller");

router.get("/:userId", getBalancesForUser);

module.exports = router;
