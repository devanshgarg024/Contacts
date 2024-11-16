const pool = require("../config/db");

const editNotetodb = {
  edit: async (key,first_name,last_name,contact_number,email,company,job_title) => {
    const result = await pool.query(
      "UPDATE contact_info SET first_name = $1, last_name = $2, contact_number = $3, email = $4, company = $5, job_title = $6 WHERE key = $7 RETURNING *;", [first_name,last_name,contact_number,email,company,job_title,key]
    );
    return result.rows[0];
  },
};

module.exports = editNotetodb;
