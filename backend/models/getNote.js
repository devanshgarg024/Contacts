const pool = require("../config/db");

const getAllNotes = async () => {
    const result = await pool.query("SELECT * FROM contact_info ORDER BY first_name ASC"); // Adjust table name if needed
    return result.rows;
  };

  module.exports = getAllNotes;