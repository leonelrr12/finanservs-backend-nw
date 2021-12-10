require('dotenv').config()
const mysql = require('mysql2')

const PORT = process.env.PORT || 3001
const HOST = process.env.HOST

//SMTP gmail
const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS
const EMAIL_FROM = process.env.EMAIL_FROM
const EMAIL_PORT = process.env.EMAIL_PORT


// // MySql DIgital Ocean-2
// const cnn = mysql.createConnection({
//     host: process.env.DB_HOST,
//     database: process.env.DATABASE,
//     user: process.env.DB_USER,
//     password: process.env.DB_PWD,
//     port: process.env.PORTDB,
//     connect_timeout: 1000
// })

// // Check connection
// cnn.connect(error => {
//   // if (error) throw error;
//   console.log('Database server runnuning!');
// })


// MySql DIgital Ocean-2
const cnn = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DATABASE,
  password: process.env.DB_PWD,
  port: process.env.PORTDB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = {
  PORT,
  HOST,
  cnn,
  EMAIL_USER,
  EMAIL_PASS,
  EMAIL_FROM,
  EMAIL_PORT,
}