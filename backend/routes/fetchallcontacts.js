const express = require("express");
const router = express.Router();
const {getNotes } = require("../controllers/getnoteController");

router.get("/",getNotes);

module.exports = router;
