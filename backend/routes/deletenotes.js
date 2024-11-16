// server/routes/notes.js
const express = require("express");
const { deleteNote } = require("../controllers/deletenoteController");
const router = express.Router();
router.delete("/:id", deleteNote);

module.exports = router;
