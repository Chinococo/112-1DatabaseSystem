const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const crypto = require('crypto');

app.use(express.json());
const portHttp = 5000;
const portHttps = 5001; // 選擇一個 HTTPS 的 port

function generateRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex') // Convert to hexadecimal
    .slice(0, length); // Slice to the specified length
}

app.use(cors());

// Path to your SSL certificate and private key
const sslOptions = {
  cert: fs.readFileSync('/usr/src/app/fullchain.pem'),
  key: fs.readFileSync('/usr/src/app/privkey.pem')
};

// 定義一個簡單的路由
const dbConfig = {
  host: process.env.DB_HOST || 'database',
  port: 3306, // Change this to the desired port
  user: 'docker',
  password: 'docker',
  database: 'database_project'
};
console.log(dbConfig);
// Create a MySQL pool
const pool = mysql.createPool(dbConfig);
const challengeRoute = '/.well-known/acme-challenge/OVbKT9dEo7-0c_EtbXasawtBAKED_60CTNDlUf3jwWE';
const challengeContent = 'OVbKT9dEo7-0c_EtbXasawtBAKED_60CTNDlUf3jwWE.3sCwY8t6GjzBAAW8pWm5SrSwbtC4MOSkOLqjSyFy_74';

app.get(challengeRoute, (req, res) => {
  res.send(challengeContent);
});
app.get('/api', (req, res) => {
  res.json({ message: 'Hello, this is a simple RESTful API!' });
});

// 創建 HTTP 伺服器
const httpServer = http.createServer(app);
httpServer.listen(portHttp, () => {
  console.log(`HTTP Server running at http://localhost:${portHttp}`);
});

// 創建 HTTPS 伺服器
const httpsServer = https.createServer(sslOptions, app);
httpsServer.listen(portHttps, () => {
  console.log(`HTTPS Server running at https://localhost:${portHttps}`);
});
