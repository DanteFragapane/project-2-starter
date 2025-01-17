const mysql = require('mysql')

const opts = process.env.JAWSDB_URL || {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'project2_db'
}

const connection = mysql.createConnection(opts)

// Very simple and dumb middleware that attaches the open mysql connection to the request object
// This means you can do req.connection.query now
function db (req, _, next) {
  req.connection = connection

  next()
}

module.exports = db
