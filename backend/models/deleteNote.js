
const pool = require("../config/db");

const deleteNotetodb = {
  delete: async (id) => {
    const result = await pool.query(
      "DELETE FROM contact_info WHERE key = $1", [id]
    );
    return result.rows[0];
  },
};

module.exports = deleteNotetodb;
