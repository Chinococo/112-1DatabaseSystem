const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const crypto = require('crypto');
app.use(express.json())
const port = 5000;
function generateRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex') // 轉換成十六進制
    .slice(0, length); // 截取指定長度的字串
}
app.use(cors());
// 定義一個簡單的路由
dbConfig = {
  host: process.env.DB_HOST || 'database',
  port: 3306, // Change this to the desired port
  user: 'docker',
  password: 'docker',
  database: 'database_project'
};
console.log(dbConfig);
// Create a MySQL pool
pool = mysql.createPool(dbConfig);
app.get('/api', (req, res) => {
  res.json({ message: 'Hello, this is a simple RESTful API!' });
});
app.post('/Register', (req, res) => {
  const { Name, Sex, Register_date, Email, Password } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }
    const sql = `INSERT INTO Customer (ID_card, Name, Sex, Register_date, Email, Password) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [generateRandomString(16), Name, Sex, Register_date, Email, Password];
    console.log(values);
    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", message: 'Data inserted into MySQL successfully'});
      }
      connection.release();
    });
  });
});
app.post('/Login', (req, res) => {
  const { Email, Password } = req.body;
  
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }

    const sql = 'SELECT * FROM Customer WHERE Email = ?';
    const values = [Email];

    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        if (results.length === 0) {
          res.json({ status: "unsuccess", message: 'User not found' });
        } else {
          const storedPassword = results[0].Password;
          if (Password === storedPassword) {
            res.json({ status: "success", message: 'Login successful' });
          } else {
            res.json({ status: "unsuccess", message: 'Password error' });
          }
        }
      }
      connection.release();
    });
  });
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
