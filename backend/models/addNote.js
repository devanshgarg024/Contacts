
const pool = require("../config/db");

const addNotetodb = {
  create: async (fn, ln, cn,em,cm,jt) => {
    const result = await pool.query(
      "INSERT INTO contact_info (first_name, last_name, contact_number,email,company,job_title) VALUES ($1, $2, $3,$4, $5, $6) RETURNING *",
      [fn, ln, cn,em,cm,jt]
    );
    return result.rows[0];
  },
};

module.exports = addNotetodb;
