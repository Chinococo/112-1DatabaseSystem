const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
// 定義一個簡單的路由
app.get('/api', (req, res) => {
  res.json({ message: 'Hello, this is a simple RESTful API!' });
});
const dbConfig = {
  host: 'database',
  port: 3306, // Change this to the desired port
  user: 'docker',
  password: 'docker',
  database: 'database_project'
};

// Create a MySQL pool
const pool = mysql.createPool(dbConfig);

// Endpoint to test MySQL connection
app.get('/test_mysql_connection', (req, res) => {
  pool.getConnection((err, connection) => {
      if (err) {
          res.status(500).json({ success: false, message: `MySQL connection error: ${err.message}` });
      } else {
          res.json({ success: true, message: 'Connected to MySQL successfully' });
          connection.release();
      }
  });
});
// 啟動伺服器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
