const deleteNotetodb = require("../models/deleteNote");

const deleteNote = async (req, res) => {
  try {
      const {id}=req.params;
      const deleteNote = await deleteNotetodb.delete(id);
    res.status(201).json(deleteNote);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete note" });
  }
};

module.exports = { deleteNote };
