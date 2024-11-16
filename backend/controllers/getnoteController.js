const getAllNotes = require("../models/getNote");

// Controller to get all notes
const getNotes = async (req, res) => {
    try {
      const notes = await getAllNotes();
      res.status(200).json(notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

module.exports = { getNotes };
