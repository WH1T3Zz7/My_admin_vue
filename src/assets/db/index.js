const mysql = require('mysql')

const db = mysql.createPool({
  host: 'http://localhost:8080/',
  user: 'root',
  password: 'admin123',
  database: 'my_db-01'
})

export default db
