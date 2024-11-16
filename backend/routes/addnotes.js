// server/routes/notes.js
const express = require("express");
const { addNote } = require("../controllers/addnoteController");
const router = express.Router();
router.post("/", addNote);

module.exports = router;
