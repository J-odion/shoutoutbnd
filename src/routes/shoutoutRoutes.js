const express = require("express");
const { createShoutout, getShoutouts } = require("../controllers/shoutoutController");

const router = express.Router();

router.post("/", createShoutout);
router.get("/", getShoutouts);

module.exports = router;
