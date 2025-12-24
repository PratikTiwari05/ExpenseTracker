const express = require("express");
const router = express.Router();
const { addExpense } = require("../controller/expense_controller");

router.post("/", addExpense);

module.exports = router;
