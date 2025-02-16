const pool = require("../config/db");

const getAllNotes = async () => {
  try {
    const result = await pool.query("SELECT * FROM contact_info ORDER BY first_name ASC");
    return result.rows;
  } catch (error) {
    console.error("Error fetching notes:", error.message);
    throw new Error("Database query failed");
  }
};

module.exports = getAllNotes;
