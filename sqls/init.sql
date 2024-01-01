-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： database:3306
-- 產生時間： 2024 年 01 月 01 日 20:24
-- 伺服器版本： 5.7.44
-- PHP 版本： 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `database_project`
--

-- --------------------------------------------------------

--
-- 資料表結構 `Cinema`
--

CREATE TABLE `Cinema` (
  `Cinema_ssn` varchar(255) NOT NULL,
  `Cinema_No` varchar(255) DEFAULT NULL,
  `Theater_Name` varchar(255) DEFAULT NULL,
  `Seat_Row` int(11) NOT NULL,
  `Seat_Column` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `Cinema`
--

INSERT INTO `Cinema` (`Cinema_ssn`, `Cinema_No`, `Theater_Name`, `Seat_Row`, `Seat_Column`) VALUES
('C001', '1', '台北信義威秀影城', 10, 10),
('C002', '1', '喜滿樂絕色影城', 6, 6),
('C003', '2', '台北信義威秀影城', 7, 7),
('C004', '2', '喜滿樂絕色影城', 8, 8);

-- --------------------------------------------------------

--
-- 資料表結構 `Coupon`
--

CREATE TABLE `Coupon` (
  `CouponID` varchar(255) NOT NULL,
  `CustomerID` varchar(255) NOT NULL,
  `Fee` int(11) DEFAULT NULL,
  `Reason` varchar(255) DEFAULT NULL,
  `Situation` varchar(255) DEFAULT NULL,
  `Start_Date` date DEFAULT NULL,
  `End_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `Coupon`
--

INSERT INTO `Coupon` (`CouponID`, `CustomerID`, `Fee`, `Reason`, `Situation`, `Start_Date`, `End_Date`) VALUES
('COUP002', 'B987654321', 15, 'Special Offer', 'Active', '2023-02-01', '2023-02-28'),
('COUP003', 'C111223344', 20, 'Birthday Coupon', 'Active', '2023-03-01', '2023-03-31'),
('COUP004', 'A123456789', 10, 'No Discount', 'Active', '2023-01-01', '2033-02-28'),
('NoDiscount001', 'B987654321', 0, 'No Discount', 'Active', '2023-02-01', '2032-02-29'),
('NoDiscount002', 'A123456789', 0, 'No Discount', 'Active', '2023-02-01', '2032-02-29'),
('NoDiscount003', 'C111223344', 0, 'No Discount', 'Active', '2023-02-01', '2032-02-29');

-- --------------------------------------------------------

--
-- 資料表結構 `Customer`
--

CREATE TABLE `Customer` (
  `ID_card` varchar(255) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Sex` varchar(255) DEFAULT NULL,
  `Register_date` date DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `Customer`
--

INSERT INTO `Customer` (`ID_card`, `Name`, `Sex`, `Register_date`, `Email`, `Address`, `Password`) VALUES
('A123456789', 'John Doe', 'Male', '2023-01-01', 'john.doe@example.com', '123 Main St', '12345678'),
('B987654321', 'Jane Smith', 'Female', '2023-01-02', 'jane.smith@example.com', '456 Oak St', '987654321'),
('C111223344', 'Chris Johnson', 'Male', '2023-01-03', 'chris.johnson@example.com', '789 Pine St', '918273645');

-- --------------------------------------------------------

--
-- 資料表結構 `Employee`
--

CREATE TABLE `Employee` (
  `Employee_ID` varchar(255) NOT NULL,
  `Position` varchar(255) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `Employee`
--

INSERT INTO `Employee` (`Employee_ID`, `Position`, `Name`) VALUES
('EMP001', 'Manager', 'John Doe'),
('EMP002', 'Cashier', 'Jane Smith'),
('EMP003', 'Security Guard', 'Chris Johnson');

-- --------------------------------------------------------

--
-- 資料表結構 `Movie`
--

CREATE TABLE `Movie` (
  `Movie_ID` varchar(255) NOT NULL,
  `Type` varchar(255) DEFAULT NULL,
  `Actors` varchar(255) DEFAULT NULL,
  `Rate` int(11) DEFAULT NULL,
  `Director` varchar(255) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Duration` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `information` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `Movie`
--

INSERT INTO `Movie` (`Movie_ID`, `Type`, `Actors`, `Rate`, `Director`, `Name`, `Duration`, `image`, `information`) VALUES
('1', 'Action', 'Tom Cruise, Scarlett Johansson', 9, 'Christopher Nolan', 'Inception', 150, 'inception.jpg', '幹片1'),
('2', 'Comedy', 'Ryan Reynolds, Emma Stone', 8, 'Taika Waititi', 'Deadpool', 120, 'deadpool.jpg', '幹片2'),
('3', 'Drama', 'Brad Pitt, Cate Blanchett', 9, 'Quentin Tarantino', 'Pulp Fiction', 154, 'pulpfiction.jpg', '幹片3');

-- --------------------------------------------------------

--
-- 資料表結構 `Movie_Screening_Schedule`
--

CREATE TABLE `Movie_Screening_Schedule` (
  `Play_ID` varchar(255) NOT NULL,
  `date` date DEFAULT NULL,
  `PlayTime` time NOT NULL,
  `Cinema_ssn` varchar(255) NOT NULL,
  `Movie_ID` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `Movie_Screening_Schedule`
--

INSERT INTO `Movie_Screening_Schedule` (`Play_ID`, `date`, `PlayTime`, `Cinema_ssn`, `Movie_ID`) VALUES
('PLAY001', '2023-01-15', '15:00:00', 'C001', '1'),
('PLAY002', '2023-02-10', '18:30:00', 'C001', '2'),
('PLAY003', '2023-03-05', '20:00:00', 'C002', '3');

-- --------------------------------------------------------

--
-- 資料表結構 `Notification`
--

CREATE TABLE `Notification` (
  `NotifyID` varchar(255) NOT NULL,
  `Message` varchar(255) DEFAULT NULL,
  `Start_Date` date DEFAULT NULL,
  `End_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `Notification`
--

INSERT INTO `Notification` (`NotifyID`, `Message`, `Start_Date`, `End_Date`) VALUES
('NOTIFY001', 'Special Promotion! 10% off on all tickets!', '2023-01-01', '2023-01-15'),
('NOTIFY002', 'Upcoming Movie Premiere! Book your tickets now!', '2023-02-01', '2023-02-28');

-- --------------------------------------------------------

--
-- 資料表結構 `OrderDetail`
--

CREATE TABLE `OrderDetail` (
  `Order_ID` varchar(255) NOT NULL,
  `Order_Date` date DEFAULT NULL,
  `Ship_Date` date DEFAULT NULL,
  `status` varchar(11) DEFAULT NULL,
  `Cinema_ssn` varchar(255) DEFAULT NULL,
  `Price` int(11) DEFAULT NULL,
  `Play_ID` varchar(255) DEFAULT NULL,
  `Coupon_ID` varchar(255) DEFAULT NULL,
  `SeatID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `OrderDetail`
--

INSERT INTO `OrderDetail` (`Order_ID`, `Order_Date`, `Ship_Date`, `status`, `Cinema_ssn`, `Price`, `Play_ID`, `Coupon_ID`, `SeatID`) VALUES
('ORDER001', '2023-01-20', '2023-01-25', 'Shipped', 'C001', 20, 'PLAY001', 'COUP002', 1),
('ORDER002', '2023-02-05', '2023-02-10', 'Pending', 'C002', 26, 'PLAY002', 'COUP003', 2);

-- --------------------------------------------------------

--
-- 資料表結構 `Seats`
--

CREATE TABLE `Seats` (
  `SeatID` int(11) NOT NULL,
  `SeatRow` int(50) DEFAULT NULL,
  `SeatColumn` int(10) DEFAULT NULL,
  `PlayID` varchar(255) NOT NULL,
  `SeatCustomerID_card` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `Seats`
--

INSERT INTO `Seats` (`SeatID`, `SeatRow`, `SeatColumn`, `PlayID`, `SeatCustomerID_card`) VALUES
(1, 10, 5, 'PLAY001', 'A123456789'),
(2, 10, 5, 'PLAY002', 'B987654321');

-- --------------------------------------------------------

--
-- 資料表結構 `Theater`
--

CREATE TABLE `Theater` (
  `Name` varchar(255) NOT NULL,
  `Business_Address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `Theater`
--

INSERT INTO `Theater` (`Name`, `Business_Address`) VALUES
('台北信義威秀影城', '110 臺北市信義區松壽路20號1樓'),
('喜滿樂絕色影城', '108 臺北市萬華區西門町漢中街52號8-11樓 ');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `Cinema`
--
ALTER TABLE `Cinema`
  ADD PRIMARY KEY (`Cinema_ssn`),
  ADD KEY `fk_Theater_Name` (`Theater_Name`);

--
-- 資料表索引 `Coupon`
--
ALTER TABLE `Coupon`
  ADD PRIMARY KEY (`CouponID`),
  ADD KEY `fk_CustomerID` (`CustomerID`);

--
-- 資料表索引 `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`ID_card`);

--
-- 資料表索引 `Employee`
--
ALTER TABLE `Employee`
  ADD PRIMARY KEY (`Employee_ID`);

--
-- 資料表索引 `Movie`
--
ALTER TABLE `Movie`
  ADD PRIMARY KEY (`Movie_ID`);

--
-- 資料表索引 `Movie_Screening_Schedule`
--
ALTER TABLE `Movie_Screening_Schedule`
  ADD PRIMARY KEY (`Play_ID`),
  ADD KEY `Movie_ID` (`Movie_ID`),
  ADD KEY `fk_Cinema` (`Cinema_ssn`);

--
-- 資料表索引 `Notification`
--
ALTER TABLE `Notification`
  ADD PRIMARY KEY (`NotifyID`);

--
-- 資料表索引 `OrderDetail`
--
ALTER TABLE `OrderDetail`
  ADD PRIMARY KEY (`Order_ID`),
  ADD KEY `Play_ID` (`Play_ID`),
  ADD KEY `Coupon_ID` (`Coupon_ID`),
  ADD KEY `fk_Cinema_ssn` (`Cinema_ssn`),
  ADD KEY `FK_OrderDetail_Seats` (`SeatID`);

--
-- 資料表索引 `Seats`
--
ALTER TABLE `Seats`
  ADD PRIMARY KEY (`SeatID`),
  ADD KEY `FK_Seats_PlayID_1` (`PlayID`),
  ADD KEY `FK_SeatCustomerID` (`SeatCustomerID_card`);

--
-- 資料表索引 `Theater`
--
ALTER TABLE `Theater`
  ADD PRIMARY KEY (`Name`);

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `Cinema`
--
ALTER TABLE `Cinema`
  ADD CONSTRAINT `fk_Theater_Name` FOREIGN KEY (`Theater_Name`) REFERENCES `Theater` (`Name`);

--
-- 資料表的限制式 `Coupon`
--
ALTER TABLE `Coupon`
  ADD CONSTRAINT `fk_CustomerID` FOREIGN KEY (`CustomerID`) REFERENCES `Customer` (`ID_card`);

--
-- 資料表的限制式 `Movie_Screening_Schedule`
--
ALTER TABLE `Movie_Screening_Schedule`
  ADD CONSTRAINT `Movie_Screening_Schedule_ibfk_1` FOREIGN KEY (`Movie_ID`) REFERENCES `Movie` (`Movie_ID`),
  ADD CONSTRAINT `fk_Cinema` FOREIGN KEY (`Cinema_ssn`) REFERENCES `Cinema` (`Cinema_ssn`);

--
-- 資料表的限制式 `OrderDetail`
--
ALTER TABLE `OrderDetail`
  ADD CONSTRAINT `FK_OrderDetail_Seats` FOREIGN KEY (`SeatID`) REFERENCES `Seats` (`SeatID`),
  ADD CONSTRAINT `OrderDetail_ibfk_1` FOREIGN KEY (`Play_ID`) REFERENCES `Movie_Screening_Schedule` (`Play_ID`),
  ADD CONSTRAINT `OrderDetail_ibfk_2` FOREIGN KEY (`Coupon_ID`) REFERENCES `Coupon` (`CouponID`),
  ADD CONSTRAINT `fk_Cinema_ssn` FOREIGN KEY (`Cinema_ssn`) REFERENCES `Cinema` (`Cinema_ssn`);

--
-- 資料表的限制式 `Seats`
--
ALTER TABLE `Seats`
  ADD CONSTRAINT `FK_SeatCustomerID` FOREIGN KEY (`SeatCustomerID_card`) REFERENCES `Customer` (`ID_card`),
  ADD CONSTRAINT `FK_Seats_PlayID_1` FOREIGN KEY (`PlayID`) REFERENCES `Movie_Screening_Schedule` (`Play_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
