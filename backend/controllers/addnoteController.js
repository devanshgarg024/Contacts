const addNotetodb = require("../models/addNote");

const addNote = async (req, res) => {
  try {
      fn=req.body.first_name;
      ln=req.body.last_name;
      cn=req.body.contact_number;
      em=req.body.email;
      cm=req.body.company;
      jt=req.body.job_title;

    const newNote = await addNotetodb.create(fn, ln, cn,em,cm,jt);
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: "Failed to add note" });
  }
};

module.exports = { addNote };
