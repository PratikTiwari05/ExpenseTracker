const express = require("express");
const router = express.Router();
const {
  createGroup,
  addUserToGroup
} = require("../controller/group_controller");

router.post("/", createGroup);
router.post("/add-user", addUserToGroup);

module.exports = router;
