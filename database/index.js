const { Pool } = require('pg');

const pool = new Pool({
  user: 'michael',
  host: 'locahost',
  database: 'products',
  port: 5432,
});

module.exports = pool;
