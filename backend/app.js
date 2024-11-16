const express = require("express");
const cors = require("cors");
const app = express();
const addnotesRoutes = require("./routes/addnotes");
const deletenotesRoutes = require("./routes/deletenotes");
const fetchallcontacts = require("./routes/fetchallcontacts");
const editnotes = require("./routes/editnotes");
require("dotenv").config();

app.use(cors()); 
app.use(express.json());
app.use("/api/addContacts", addnotesRoutes);
app.use("/api/deleteContacts", deletenotesRoutes);
app.use("/api/fetchContacts", fetchallcontacts);
app.use("/api/editContacts", editnotes);

module.exports = app;
