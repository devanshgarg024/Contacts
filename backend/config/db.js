const { Pool } = require('pg');
require('dotenv').config();

// Connection string for Render PostgreSQL database
const connectionString = process.env.PG_EXTERNAL_LINK;

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false // Disable SSL verification (required for Render's SSL)
  }
});

module.exports = pool;
