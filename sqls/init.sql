use database_project;
-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- 主機: localhost:3306
-- 產生時間： 2023 年 12 月 07 日 23:05
-- 伺服器版本: 5.7.42-0ubuntu0.18.04.1
-- PHP 版本： 7.2.24-0ubuntu0.18.04.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `admin_Database`
--

-- --------------------------------------------------------

--
-- 資料表結構 `Cinema`
--

CREATE TABLE `Cinema` (
  `Cinema_ssn` varchar(255) NOT NULL,
  `Cinema_No` varchar(255) DEFAULT NULL,
  `Theater_Name` varchar(255) DEFAULT NULL,
  `SeatInformation` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `Cinema`
--

INSERT INTO `Cinema` (`Cinema_ssn`, `Cinema_No`, `Theater_Name`, `SeatInformation`) VALUES
('C001', '1', 'City Cinemas', '{\"0\": {\"0\": 1, \"1\": 0, \"2\": 0}, \"1\": {\"0\": 1, \"1\": 0, \"2\": 0}, \"2\": {\"0\": 1, \"1\": 0, \"2\": 0}, \"3\": {\"0\": 1, \"1\": 0, \"2\": 0}}'),
('C002', '2', 'City Cinemas', '{\"0\": {\"0\": 1, \"1\": 0, \"2\": 0}, \"1\": {\"0\": 1, \"1\": 0, \"2\": 0}, \"2\": {\"0\": 1, \"1\": 0, \"2\": 0}, \"3\": {\"0\": 1, \"1\": 0, \"2\": 0}}');

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
-- 資料表的匯出資料 `Coupon`
--

INSERT INTO `Coupon` (`CouponID`, `CustomerID`, `Fee`, `Reason`, `Situation`, `Start_Date`, `End_Date`) VALUES
('COUP001', 'A123456789', 10, 'Discount', 'Active', '2023-01-01', '2023-01-31'),
('COUP002', 'B987654321', 15, 'Special Offer', 'Active', '2023-02-01', '2023-02-28'),
('COUP003', 'C111223344', 20, 'Birthday Coupon', 'Active', '2023-03-01', '2023-03-31');

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
  `Address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `Customer`
--

INSERT INTO `Customer` (`ID_card`, `Name`, `Sex`, `Register_date`, `Email`, `Address`) VALUES
('A123456789', 'John Doe', 'Male', '2023-01-01', 'john.doe@example.com', '123 Main St'),
('B987654321', 'Jane Smith', 'Female', '2023-01-02', 'jane.smith@example.com', '456 Oak St'),
('C111223344', 'Chris Johnson', 'Male', '2023-01-03', 'chris.johnson@example.com', '789 Pine St');

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
-- 資料表的匯出資料 `Employee`
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
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `Movie`
--

INSERT INTO `Movie` (`Movie_ID`, `Type`, `Actors`, `Rate`, `Director`, `Name`, `Duration`, `image`) VALUES
('1', 'Action', 'Tom Cruise, Scarlett Johansson', 9, 'Christopher Nolan', 'Inception', 150, 'inception.jpg'),
('2', 'Comedy', 'Ryan Reynolds, Emma Stone', 8, 'Taika Waititi', 'Deadpool', 120, 'deadpool.jpg'),
('3', 'Drama', 'Brad Pitt, Cate Blanchett', 9, 'Quentin Tarantino', 'Pulp Fiction', 154, 'pulpfiction.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `Movie_Screening_Schedule`
--

CREATE TABLE `Movie_Screening_Schedule` (
  `Play_ID` varchar(255) NOT NULL,
  `date` date DEFAULT NULL,
  `PlayTime` time NOT NULL,
  `Cinema_ssn` varchar(255) NOT NULL,
  `Cinema_NO` int(11) DEFAULT NULL,
  `Movie_ID` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `Movie_Screening_Schedule`
--

INSERT INTO `Movie_Screening_Schedule` (`Play_ID`, `date`, `PlayTime`, `Cinema_ssn`, `Cinema_NO`, `Movie_ID`) VALUES
('PLAY001', '2023-01-15', '15:00:00', 'C001', 1, '1'),
('PLAY002', '2023-02-10', '18:30:00', 'C001', 1, '2'),
('PLAY003', '2023-03-05', '20:00:00', 'C002', 2, '3');

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
-- 資料表的匯出資料 `Notification`
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
  `Quantity` int(11) DEFAULT NULL,
  `status` varchar(11) DEFAULT NULL,
  `Cinema_ssn` varchar(255) DEFAULT NULL,
  `Seat_Row` varchar(255) NOT NULL,
  `Seat_Number` varchar(255) NOT NULL,
  `Price` int(11) DEFAULT NULL,
  `Play_ID` varchar(255) DEFAULT NULL,
  `Coupon_ID` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `OrderDetail`
--

INSERT INTO `OrderDetail` (`Order_ID`, `Order_Date`, `Ship_Date`, `Quantity`, `status`, `Cinema_ssn`, `Seat_Row`, `Seat_Number`, `Price`, `Play_ID`, `Coupon_ID`) VALUES
('ORDER001', '2023-01-20', '2023-01-25', 2, 'Shipped', 'C001', 'A', '1', 20, 'PLAY001', 'COUP002'),
('ORDER002', '2023-02-05', '2023-02-10', 3, 'Pending', 'C002', 'B', '2', 26, 'PLAY002', 'COUP003');

-- --------------------------------------------------------

--
-- 資料表結構 `Theater`
--

CREATE TABLE `Theater` (
  `Name` varchar(255) NOT NULL,
  `Business_Address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `Theater`
--

INSERT INTO `Theater` (`Name`, `Business_Address`) VALUES
('City Cinemas', '123 Broadway Ave'),
('Starplex Cinemas', '456 Main St');

--
-- 已匯出資料表的索引
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
  ADD KEY `fk_Cinema_ssn` (`Cinema_ssn`);

--
-- 資料表索引 `Theater`
--
ALTER TABLE `Theater`
  ADD PRIMARY KEY (`Name`);

--
-- 已匯出資料表的限制(Constraint)
--

--
-- 資料表的 Constraints `Cinema`
--
ALTER TABLE `Cinema`
  ADD CONSTRAINT `fk_Theater_Name` FOREIGN KEY (`Theater_Name`) REFERENCES `Theater` (`Name`);

--
-- 資料表的 Constraints `Coupon`
--
ALTER TABLE `Coupon`
  ADD CONSTRAINT `fk_CustomerID` FOREIGN KEY (`CustomerID`) REFERENCES `Customer` (`ID_card`);

--
-- 資料表的 Constraints `Movie_Screening_Schedule`
--
ALTER TABLE `Movie_Screening_Schedule`
  ADD CONSTRAINT `Movie_Screening_Schedule_ibfk_1` FOREIGN KEY (`Movie_ID`) REFERENCES `Movie` (`Movie_ID`),
  ADD CONSTRAINT `fk_Cinema` FOREIGN KEY (`Cinema_ssn`) REFERENCES `Cinema` (`Cinema_ssn`);

--
-- 資料表的 Constraints `OrderDetail`
--
ALTER TABLE `OrderDetail`
  ADD CONSTRAINT `OrderDetail_ibfk_1` FOREIGN KEY (`Play_ID`) REFERENCES `Movie_Screening_Schedule` (`Play_ID`),
  ADD CONSTRAINT `OrderDetail_ibfk_2` FOREIGN KEY (`Coupon_ID`) REFERENCES `Coupon` (`CouponID`),
  ADD CONSTRAINT `fk_Cinema_ssn` FOREIGN KEY (`Cinema_ssn`) REFERENCES `Cinema` (`Cinema_ssn`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;