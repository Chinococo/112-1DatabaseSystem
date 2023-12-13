const express = require('express');
const app = express();
const port = 3000;

// 定義一個簡單的路由
app.get('/api', (req, res) => {
  res.json({ message: 'Hello, this is a simple RESTful API!' });
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
