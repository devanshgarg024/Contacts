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
app.use("/api/contacts", addnotesRoutes);
app.use("/api/contacts", deletenotesRoutes);
app.use("/api/contacts", fetchallcontacts);
app.use("/api/contacts", editnotes);

module.exports = app;
