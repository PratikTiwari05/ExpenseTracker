const express = require("express");
const router = express.Router();
const { settleDue } = require("../controller/settlement_controller");

router.post("/", settleDue);

module.exports = router;
