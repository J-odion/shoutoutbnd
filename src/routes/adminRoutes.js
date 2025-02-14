const express = require("express");
const { loginAdmin, moderateShoutout } = require("../controllers/adminController");

const router = express.Router();

router.post("/login", loginAdmin);
router.post("/moderate", moderateShoutout);

module.exports = router;
