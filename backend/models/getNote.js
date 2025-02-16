const pool = require("../config/db");

const getAllNotes = async () => {
  try {
    const client = await pool.connect(); // Ensure connection is established
    const result = await client.query("SELECT * FROM contact_info ORDER BY first_name ASC");
    client.release(); // Release connection back to pool
    return result.rows;
  } catch (error) {
    console.error("❌ Error fetching notes:", error.message);
    throw new Error("Database query failed");
  }
};

module.exports = getAllNotes;
