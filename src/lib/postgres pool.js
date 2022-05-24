const { Pool } = require('pg');


const pool = new Pool({
  host: 'localhost',
  post: 5432,
  user: 'bosque_admin',
  password: 'bosque123',
  database: 'bosque_db'
});




module.exports = pool;
