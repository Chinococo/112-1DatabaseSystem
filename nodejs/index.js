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
          console.log(results[0]);
          if (Password === storedPassword) {
            res.json({ status: "success", message: 'Login successful',ID_card:results[0].ID_card});
          } else {
            res.json({ status: "unsuccess", message: 'Password error' });
          }
        }
      }
      connection.release();
    });
  });
});
app.post('/GetCoupons', (req, res) => {
  const { CustomerID } = req.body;
  
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }

    const sql = 'SELECT * FROM Coupon WHERE CustomerID = ?';
    const values = [CustomerID];

    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        if (results.length === 0) {
          res.json({ status: "unsuccess", message: 'No coupons found for the specified CustomerID' });
        } else {
          res.json({ status: "success", message: 'Coupons retrieved successfully', coupons: results });
        }
      }
      connection.release();
    });
  });
});
app.get('/GetMovie', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }

    const sql = 'SELECT * FROM `Movie`';

    connection.query(sql, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", movies: results});

      }
      connection.release();
    });
  });
});
app.get('/GetMovie/:movieName', (req, res) => {
  const { movieName } = req.params; // Use req.params to get parameters from the URL
  
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }

    // Use a WHERE clause to filter by movieName
    const sql = 'SELECT * FROM `Movie` WHERE Name = ?';
    const values = [movieName];
    console.log(values);
    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", movies: results });
      }
      connection.release();
    });
  });
});
app.get('/theaters/:theaters_Name', (req, res) => {
  const { theaters_Name } = req.params; // Use req.params to get parameters from the URL
  console.log(req.params);
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }

    // Use a WHERE clause to filter by movieName
    const sql = `
    SELECT 
        Movie_Screening_Schedule.PlayTime,
        Movie_Screening_Schedule.Movie_ID,
        Cinema.Theater_Name,
        Movie.*,
        (Cinema.Seat_Row * Cinema.Seat_Column) AS OriginalSeats,
        (Cinema.Seat_Row * Cinema.Seat_Column) - COUNT(Seats.SeatID) AS RemainingSeats
    FROM 
        Movie_Screening_Schedule 
    JOIN 
        Cinema ON Movie_Screening_Schedule.Cinema_ssn = Cinema.Cinema_ssn 
    JOIN 
        Movie ON Movie_Screening_Schedule.Movie_ID = Movie.Movie_ID
    LEFT JOIN
        Seats ON Movie_Screening_Schedule.Play_ID = Seats.PlayID
    WHERE 
        Cinema.Theater_Name = ?
    GROUP BY
        Movie_Screening_Schedule.PlayTime,
        Movie_Screening_Schedule.Movie_ID,
        Cinema.Theater_Name,
        Movie.Movie_ID,  -- Assuming Movie has a primary key Movie_ID
        Cinema.Seat_Row,
        Cinema.Seat_Column;
`;
    const values = [theaters_Name];
    console.log(values);
    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", movies: results });
      }
      connection.release();
    });
  });
});
app.get('/GetMovie', (req, res) => {
  const { q } = req.query; // Use req.query to get parameters from the query string
  
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }

    // Use a WHERE clause with LIKE for fuzzy search
    const sql = 'SELECT * FROM `Movie` WHERE Name LIKE ?';
    const fuzzySearchTerm = `%${q}%`; // Surround the search term with % for fuzzy search
    const values = [fuzzySearchTerm];
    
    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", movies: results });
      }
      connection.release();
    });
  });
});
app.post('/Transaction', (req, res) => {
  const { Play_ID, Seta_Row, Seta_Column, CustomerID_card, Coupon_ID, TicketType } = req.body;
  // 插入数据到 Seats 表
  const insertSeatsQuery = "INSERT INTO `Seats` (`SeatRow`, `SeatColumn`, `PlayID`) VALUES (?, ?, ?)";
  const seatsValues = [Seta_Row, Seta_Column, Play_ID];
  pool.getConnection((err, connection) => {
    if (err) {
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      console.log(err.message);
      // 处理数据库连接错误
      return;
    }

    connection.query(insertSeatsQuery, seatsValues, (seatsQueryErr, seatsResults) => {
      if (seatsQueryErr) {
        console.log(seatsQueryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${seatsQueryErr.message}` });
        // 处理 Seats 表插入错误
        connection.release();
        return;
      }

      // 获取刚插入的 SeatID
      const seatID = seatsResults.insertId;
      console.log(seatsResults.insertId);
      // 插入数据到 OrderDetail 表
      const insertOrderDetailQuery = "INSERT INTO `OrderDetail`(`Ship_Date`, `status`, `Coupon_ID`, `SeatID`, `TicketType`,`ID_card`) VALUES ( NOW(),'unpayment',?, ?, ?, ?)";
      const orderDetailValues = [Coupon_ID,seatID, TicketType, CustomerID_card];

      connection.query(insertOrderDetailQuery, orderDetailValues, (orderDetailQueryErr, orderDetailResults) => {
        if (orderDetailQueryErr) {
          console.log(orderDetailQueryErr.message);
          res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${orderDetailQueryErr.message}` });
        } else {
          console.log("Data inserted successfully");
          res.json({ status: "success"});
        }

        // 释放连接
        connection.release();
      });
    });
  });
});
app.post('/Coupon', (req, res) => {
  const {ID_card } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }
    // Use a WHERE clause with LIKE for fuzzy search
    const sql = 'SELECT * FROM Coupon WHERE `CustomerID`= ?;';
    const values = [ID_card];
    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", Coupon: results });
      }
      connection.release();
    });
  });
});
app.post('/Tickets', (req, res) => {
  const {ID_card } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }
    // Use a WHERE clause with LIKE for fuzzy search
    const sql = 'SELECT * FROM OrderDetail WHERE `ID_card`= ?;';
    const values = [ID_card];
    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", Tickets: results });
      }
      connection.release();
    });
  });
});

app.post('/AddMovie', (req, res) => {
  const {Type,Actors,Rate,Director,Name,Duration,image,information} = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }
    // Use a WHERE clause with LIKE for fuzzy search
    const sql = 'INSERT INTO `Movie`(`Movie_ID`, `Type`, `Actors`, `Rate`, `Director`, `Name`, `Duration`, `image`, `information`) VALUES (?,?,?,?,?,?,?,?,?)';
    const values = [generateRandomString(16),Type,Actors,Rate,Director,Name,Duration,image,information];
    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", Tickets: results });
      }
      connection.release();
    });
  });
});
app.post('/UpdateMovie', (req, res) => {
  const {Movie_ID,Type,Actors,Rate,Director,Name,Duration,image,information} = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }
    // Use a WHERE clause with LIKE for fuzzy search
    const sql = 'UPDATE `Movie` SET `Type`=?,`Actors`=?,`Rate`=?,`Director`=?,`Name`=?,`Duration`=?,`image`=?,`information`=? where Movie_ID=?';
    const values = [Type,Actors,Rate,Director,Name,Duration,image,information,Movie_ID];
    console.log(values);
    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", Tickets: results });
      }
      connection.release();
    });
  });
});
app.post('/AddNotification', (req, res) => {
  const {Message, Start_Date, End_Date} = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }
    // Use a WHERE clause with LIKE for fuzzy search
    const sql = 'INSERT INTO `Notification`( `Message`, `Start_Date`, `End_Date`) VALUES (?,?,?)';
    const values = [Message, Start_Date, End_Date];
    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", Tickets: results });
      }
      connection.release();
    });
  });
});
app.get('/GetNotification', (req, res) => {
  const { date } = req.query; // Use req.query to get parameters from the query string
  
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }

    // Use a WHERE clause with LIKE for fuzzy search
    const sql = 'SELECT * FROM `Notification` WHERE `Start_Date` <= ? AND ? <= `End_Date`;';
    const values = [date,date];
    
    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", Notification: results});
      }
      connection.release();
    });
  });
});
app.post('/UpdateCustomerInformation', (req, res) => {
  const {Name, Sex, Email,Address,Password,ID_card} = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }
    // Use a WHERE clause with LIKE for fuzzy search
    const sql = 'UPDATE `Customer` SET `Name`=?, `Sex`=?, `Email`=?, `Address`=?, `Password`=? WHERE `ID_card` = ?;';
    const values = [Name, Sex, Email,Address,Password,ID_card];
    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", Tickets: results });
      }
      connection.release();
    });
  });
});
app.post('/AddCinema', (req, res) => {
  const {Cinema_ssn, Cinema_No, Theater_Name, Seat_Row, Seat_Column} = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }
    // Use a WHERE clause with LIKE for fuzzy search
    const sql = 'INSERT INTO `Cinema`(`Cinema_ssn`, `Cinema_No`, `Theater_Name`, `Seat_Row`, `Seat_Column`) VALUES (?,?,?,?,?);';
    const values = [Cinema_ssn, Cinema_No, Theater_Name, Seat_Row, Seat_Column];
    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", Tickets: results });
      }
      connection.release();
    });
  });
});
app.post('/UpdateCinema', (req, res) => {
  const {Cinema_ssn,Cinema_No, Theater_Name, Seat_Row, Seat_Column} = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }
    // Use a WHERE clause with LIKE for fuzzy search
    const sql = 'UPDATE `Cinema` SET `Cinema_No`=?,`Theater_Name`=?,`Seat_Row`=?,`Seat_Column`=? WHERE `Cinema_ssn`=?;';
    const values = [ Cinema_No, Theater_Name, Seat_Row, Seat_Column,Cinema_ssn];
    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", Tickets: results });
      }
      connection.release();
    });
  });
});
app.post('/AddNewMovieSchedule', (req, res) => {
  const {date,PlayTime,Cinema_ssn,Movie_ID} = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }
    // Use a WHERE clause with LIKE for fuzzy search
    const sql = 'INSERT INTO `Movie_Screening_Schedule`(`Play_ID`, `date`, `PlayTime`, `Cinema_ssn`, `Movie_ID`) VALUES (?,?,?,?,?)';
    const values = [generateRandomString(16),date,PlayTime,Cinema_ssn,Movie_ID];
    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", Tickets: results });
      }
      connection.release();
    });
  });
});
app.post('/UpdateMovieSchedule', (req, res) => {
  const {Play_ID,date,PlayTime,Cinema_ssn,Movie_ID} = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }
    // Use a WHERE clause with LIKE for fuzzy search
    const sql = 'UPDATE `Movie_Screening_Schedule` SET `date`=?,`PlayTime`=?,`Cinema_ssn`=?,`Movie_ID`=? WHERE `Play_ID`=?';
    const values = [Play_ID,date,PlayTime,Cinema_ssn,Movie_ID];
    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", Tickets: results });
      }
      connection.release();
    });
  });
});
app.get('/RemaingSeats', (req, res) => {
  console.log(req.params);
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }
    // Use a WHERE clause to filter by movieName
    const sql = `
    SELECT 
        Movie_Screening_Schedule.PlayTime,
        Movie_Screening_Schedule.Movie_ID,
        Cinema.Theater_Name,
        Movie.*,
        (Cinema.Seat_Row * Cinema.Seat_Column) AS OriginalSeats,
        (Cinema.Seat_Row * Cinema.Seat_Column) - COUNT(Seats.SeatID) AS RemainingSeats
    FROM 
        Movie_Screening_Schedule 
    JOIN 
        Cinema ON Movie_Screening_Schedule.Cinema_ssn = Cinema.Cinema_ssn 
    JOIN 
        Movie ON Movie_Screening_Schedule.Movie_ID = Movie.Movie_ID
    LEFT JOIN
        Seats ON Movie_Screening_Schedule.Play_ID = Seats.PlayID
    GROUP BY
        Movie_Screening_Schedule.PlayTime,
        Movie_Screening_Schedule.Movie_ID,
        Cinema.Theater_Name,
        Movie.Movie_ID,  -- Assuming Movie has a primary key Movie_ID
        Cinema.Seat_Row,
        Cinema.Seat_Column;
`;
    const values = [];
    console.log(values);
    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", movies: results });
      }
      connection.release();
    });
  });
});
app.get('/GetAllCinema', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ status: "unsuccess", message: `MySQL connection error: ${err.message}` });
      return;
    }
    // Use a WHERE clause to filter by movieName
    const sql = `
      SELECT * FROM Cinema
    `;
    const values = [];
    console.log(values);
    connection.query(sql, values, (queryErr, results) => {
      if (queryErr) {
        console.log(queryErr.message);
        res.status(500).json({ status: "unsuccess", message: `MySQL query error: ${queryErr.message}` });
      } else {
        res.json({ status: "success", movies: results });
      }
      connection.release();
    });
  });
});
// 創建 HTTP 伺服器
const httpServer = http.createServer(app);
httpServer.listen(portHttp, () => {
  console.log(`HTTP Server running at http://localhost:${portHttp}`);
});

const certPath = '/usr/src/app/fullchain.pem';
const keyPath = '/usr/src/app/privkey.pem';

let sslOptions = {};
if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
  sslOptions = {
    cert: fs.readFileSync(certPath),
    key: fs.readFileSync(keyPath)
  };
  // 如果檔案存在，則啟動 HTTPS 伺服器
  const httpsServer = https.createServer(sslOptions, app);
  httpsServer.listen(portHttps, () => {
    console.log(`HTTPS Server running at https://localhost:${portHttps}`);
  });
} else {
  console.log("SSL certificate or private key file not found. HTTPS server will not be started.");
}
