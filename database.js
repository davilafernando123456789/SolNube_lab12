const mysql = require('mysql2/promise');

// Cambia estos valores con la información de tu base de datos RDS MySQL
const {
  DB_HOST = 'semana12.cwol9io3cymq.us-east-2.rds.amazonaws.com',
  DB_USER = 'root',
  DB_PASSWORD = 'Fernadb76',
  DB_NAME = 'semana12',
} = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
