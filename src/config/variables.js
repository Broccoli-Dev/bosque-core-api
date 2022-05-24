require('dotenv').config();

const dockerConfig = {
  dbname: process.env.DB_NAME,
  dbuser: process.env.DB_USER,
  dbpassword: process.env.DB_PASSWORD
}

module.exports = { dockerConfig }
