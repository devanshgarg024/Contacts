const editNotetodb = require("../models/editNote");

const editNote = async (req, res) => {
  try {
    // console.log(id);
    const { id } = req.params; 
    const { first_name, last_name, contact_number, email, company, job_title } = req.body; // Get data from the request body
    // console.log(id);
    const editNote = await editNotetodb.edit(id,first_name,last_name,contact_number,email,company,job_title);
    res.status(201).json(editNote);
  } catch (error) {
    res.status(500).json({ error: "Failed to edit note" });
  }
};

module.exports = { editNote };
