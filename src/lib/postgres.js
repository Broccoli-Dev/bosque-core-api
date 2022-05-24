const { Client } = require('pg');

async function getConnection () {
  const client = new Client({
    host: 'localhost',
    post: 5432,
    user: 'bosque_admin',
    password: 'bosque123',
    database: 'bosque_db'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
