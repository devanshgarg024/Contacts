// server/routes/notes.js
const express = require("express");
const { editNote } = require("../controllers/editnoteController");
const router = express.Router();
router.put("/:id", editNote);
  
module.exports = router;
