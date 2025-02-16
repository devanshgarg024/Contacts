const { Pool } = require('pg');
require('dotenv').config();

const connectionString = process.env.PG_EXTERNAL_LINK;

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false, // Required for Render's SSL
  },
});

// Handle connection errors
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1); // Exit process on critical failure
});

console.log('Connected to PostgreSQL database successfully');

module.exports = pool;
