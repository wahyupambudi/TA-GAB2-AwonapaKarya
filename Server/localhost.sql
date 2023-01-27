-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 27, 2023 at 04:44 PM
-- Server version: 10.5.18-MariaDB-0+deb11u1
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pwbs_awonapakarya`
--
CREATE DATABASE IF NOT EXISTS `db_pwbs_awonapakarya` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_pwbs_awonapakarya`;

-- --------------------------------------------------------

--
-- Table structure for table `Sessions`
--

CREATE TABLE `Sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Sessions`
--

INSERT INTO `Sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('-7GhsFdmSGgmp3SqBktqs39TyG48nNlo', '2023-01-28 00:00:01', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:01.078Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:01', '2023-01-27 23:40:01'),
('-HO9juOhSGpO53LwaI6dHBG3zvQrxI77', '2023-01-27 23:09:05', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:09:05.642Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 22:49:05', '2023-01-27 22:49:05'),
('3yDQR-coKKyvO-OFdnv5ioU9r5PIgjfA', '2023-01-28 00:00:38', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:38.595Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:38', '2023-01-27 23:40:38'),
('4sUbEbWAlUfiF5kYqrN0_vfWfLymBmak', '2023-01-27 23:52:51', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:52:51.258Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:32:51', '2023-01-27 23:32:51'),
('5Ag7JcdCYZohYz8LMRIRagUJlnfkAcJB', '2023-01-28 00:00:54', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:54.951Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:54', '2023-01-27 23:40:54'),
('5hZDPBUcpibnPRNtmyFDiuB0tdSlr1jM', '2023-01-28 00:00:58', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:58.480Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:58', '2023-01-27 23:40:58'),
('6RXg2m5Z3VRTCW7N1UdIEf9G4SX9Ryg0', '2023-01-28 00:00:21', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:21.697Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:21', '2023-01-27 23:40:21'),
('7H_RsPuZhmW0W3ATiUtCkbGQFhqFvqfv', '2023-01-27 23:12:54', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:11:24.309Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 22:51:24', '2023-01-27 22:52:54'),
('AE1gJmxCHQ80sg2HkMtlNz0ZqY0WVsiR', '2023-01-27 23:59:59', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:59:59.309Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:39:59', '2023-01-27 23:39:59'),
('CXzCsLGGIPAtwFwBXUbw3cyNB1SlnHoY', '2023-01-28 00:00:19', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:19.909Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:19', '2023-01-27 23:40:19'),
('CZe5Nu-1PyDbSULMobvAoO-VYk7jIQbp', '2023-01-27 23:23:12', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:23:12.274Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:03:12', '2023-01-27 23:03:12'),
('dvCFgcKrH37gS3K14_Nl4N9r7GQUscsY', '2023-01-27 23:08:53', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:08:53.339Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 22:48:53', '2023-01-27 22:48:53'),
('dx_tJxB4F_3rmz4kS9e44TWPQ8i5wQhY', '2023-01-28 00:00:41', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:41.832Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:41', '2023-01-27 23:40:41'),
('EhQ1EdNi4JCyylgaz1otBGYweGdqyKL_', '2023-01-28 00:00:41', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:41.838Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:41', '2023-01-27 23:40:41'),
('enBD-Qdf0JfjsNLZwUC2isZD2Q2MB-ao', '2023-01-28 00:00:56', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:56.143Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:56', '2023-01-27 23:40:56'),
('eUL3dwlf6a2-FIMEeNsY-58bSqDBMrC2', '2023-01-27 23:23:12', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:23:12.974Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:03:12', '2023-01-27 23:03:12'),
('Fqsz3flbBCZj6YykctajBcRKAH6N3DhL', '2023-01-28 00:00:08', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:08.510Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:08', '2023-01-27 23:40:08'),
('GaiD79VkUVsmPHc-gVsLUQsx7QuVhr33', '2023-01-28 00:00:10', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:10.687Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:10', '2023-01-27 23:40:10'),
('hW7HXLcggPta0VsEzaeUQn3fR36LK0Gt', '2023-01-28 00:00:58', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:17.901Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"2e1596e0-f5f4-4c77-b2d5-d6c178ea0727\"}', '2023-01-27 23:40:15', '2023-01-27 23:40:58'),
('iZina_zGplAPRgRWEKPsjWfXmZi440g4', '2023-01-27 23:39:33', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:19:51.002Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"2e1596e0-f5f4-4c77-b2d5-d6c178ea0727\"}', '2023-01-27 22:59:40', '2023-01-27 23:19:33'),
('J5Z3HoGCOC3GAYRuzb8hSE4VGQCMmw9E', '2023-01-28 00:00:56', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:56.247Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:56', '2023-01-27 23:40:56'),
('jeYyXkpsvQ-mmdPsSJusV9lG0UBuczOZ', '2023-01-27 23:59:59', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:59:59.402Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:39:59', '2023-01-27 23:39:59'),
('jFjjVep-EK9z21oRRSVICxqD9-RpqgAe', '2023-01-27 23:23:12', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:23:12.873Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:03:12', '2023-01-27 23:03:12'),
('Km7FgKjkScgjmw-4n4_p1mCLzeMHIKi6', '2023-01-27 23:09:05', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:09:05.146Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 22:49:05', '2023-01-27 22:49:05'),
('lbeAfYlnROqsrARtJfy9cdSrj_zEG-91', '2023-01-27 23:52:51', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:52:51.154Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:32:51', '2023-01-27 23:32:51'),
('N0LYp-hI8liftCgvzoqbgMyaF3PZtpC_', '2023-01-28 00:00:15', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:15.134Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:15', '2023-01-27 23:40:15'),
('nhrbtCWK-qH8ltXZWCOxL19Cj3HK9BWq', '2023-01-28 00:00:39', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:39.518Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:39', '2023-01-27 23:40:39'),
('OEmdyEgrLhBG0Vx0fqSDbPH_xgRpx66W', '2023-01-27 23:13:07', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:13:07.050Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 22:53:07', '2023-01-27 22:53:07'),
('OuJHF-z42Kgwrl0zDzy022lCMfeBWnFd', '2023-01-27 23:08:53', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:08:53.143Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"2e1596e0-f5f4-4c77-b2d5-d6c178ea0727\"}', '2023-01-27 22:48:53', '2023-01-27 22:48:53'),
('pmddul9zMTQbIXerQnTG7DJrV-2-IyTw', '2023-01-27 23:09:05', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:09:05.872Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 22:49:05', '2023-01-27 22:49:05'),
('PnGqBXU1jciHkeM_hXOK9wZLPA8Efs6N', '2023-01-28 00:00:21', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:21.695Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:21', '2023-01-27 23:40:21'),
('Ptgp05P2kkcPa4XtI-O3_krCFxpwAujS', '2023-01-28 00:00:20', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:20.015Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:20', '2023-01-27 23:40:20'),
('Qrs3_SLj7GrDPdeXqMxCwK4FR6mCj08l', '2023-01-27 23:08:53', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:08:53.442Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 22:48:53', '2023-01-27 22:48:53'),
('qY9vCnK85ETLwTN3Sg-LbTRjGAvXtf76', '2023-01-28 00:00:07', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:07.551Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:07', '2023-01-27 23:40:07'),
('RUBeFsy3Dd7_AvRmwEESNEAm6aA7_Im8', '2023-01-28 00:00:08', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:08.405Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:08', '2023-01-27 23:40:08'),
('SH_Dzja0giVFvTKEEKXS3zspfRB_naue', '2023-01-27 23:09:05', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:09:05.472Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"2e1596e0-f5f4-4c77-b2d5-d6c178ea0727\"}', '2023-01-27 22:49:05', '2023-01-27 22:49:05'),
('SKTnRMa7y7j_c4M_YhxLbhoyvC2LetBx', '2023-01-28 00:00:39', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T17:00:39.631Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:40:39', '2023-01-27 23:40:39'),
('SUlHXTB-_KsQ0S7Ysbs15eQo_OnLvo4u', '2023-01-27 23:13:07', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:13:07.253Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 22:53:07', '2023-01-27 22:53:07'),
('u0I41Sph8ZTf0Gv3B3xC9soTZTOdvQIf', '2023-01-27 23:23:12', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:23:12.690Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"2e1596e0-f5f4-4c77-b2d5-d6c178ea0727\"}', '2023-01-27 23:03:12', '2023-01-27 23:03:12'),
('VltwXwdkISg8haqTJkmp56LYIJc-J6yf', '2023-01-27 22:41:47', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T15:41:47.472Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 22:21:47', '2023-01-27 22:21:47'),
('wXPQpNrugS0Du36AwWNxEU4qZ4GLmbxm', '2023-01-27 23:18:59', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:17:43.444Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"2e1596e0-f5f4-4c77-b2d5-d6c178ea0727\"}', '2023-01-27 22:57:43', '2023-01-27 22:58:59'),
('ySDyKpWi52L2thir8zxktYDbyhSVcISP', '2023-01-27 23:08:52', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:08:52.721Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 22:48:52', '2023-01-27 22:48:52'),
('ZIxiMZb2d3b6H-LdwdAR7pg6CK-j6_9r', '2023-01-27 23:59:57', '{\"cookie\":{\"originalMaxAge\":1200000,\"expires\":\"2023-01-27T16:59:57.146Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-01-27 23:39:57', '2023-01-27 23:39:57');

-- --------------------------------------------------------

--
-- Table structure for table `tb_barang`
--

CREATE TABLE `tb_barang` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `kd_brg` varchar(255) NOT NULL,
  `nm_brg` varchar(255) NOT NULL,
  `spek_brg` varchar(255) NOT NULL,
  `jml_brg` int(11) NOT NULL,
  `kondisi_brg` varchar(255) NOT NULL,
  `tgl_buy_brg` datetime NOT NULL,
  `harga_brg` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_barang`
--

INSERT INTO `tb_barang` (`id`, `uuid`, `kd_brg`, `nm_brg`, `spek_brg`, `jml_brg`, `kondisi_brg`, `tgl_buy_brg`, `harga_brg`, `image`, `url`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'c5a938f6-b224-4b52-822e-bbed8d9cfb6c', 'kd01', 'Komputer baru', 'Keren', 10, 'Bagus', '2022-10-10 07:00:00', 8291291, '1674812667568-e8f6d0959a9d1cd0d9eb4d9ac19507c9.PNG', 'http://52.199.149.14:2024/images/barang/1674812667568-e8f6d0959a9d1cd0d9eb4d9ac19507c9.PNG', 1, '2023-01-27 16:44:27', '2023-01-27 16:44:27');

-- --------------------------------------------------------

--
-- Table structure for table `tb_jasabarang`
--

CREATE TABLE `tb_jasabarang` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `kd_jbrg` varchar(255) NOT NULL,
  `nm_jbrg` varchar(255) NOT NULL,
  `spek_jbrg` varchar(255) NOT NULL,
  `jml_jbrg` int(11) NOT NULL,
  `kondisi_jbrg` varchar(255) NOT NULL,
  `tgl_buy_jbrg` datetime NOT NULL,
  `harga_jbrg` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_jasabarang`
--

INSERT INTO `tb_jasabarang` (`id`, `uuid`, `kd_jbrg`, `nm_jbrg`, `spek_jbrg`, `jml_jbrg`, `kondisi_jbrg`, `tgl_buy_jbrg`, `harga_jbrg`, `image`, `url`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, '73338678-c900-48a7-89e8-48a56da370a7', 'kd01', 'Tinta Printer', 'Black', 10, 'Bagus', '2022-11-10 07:00:00', 600000, '1674812632725-6a4787bb5ead614031e93aff573eb893.png', 'http://52.199.149.14:2024/images/jbarang/1674812632725-6a4787bb5ead614031e93aff573eb893.png', 1, '2023-01-27 16:43:52', '2023-01-27 16:43:52'),
(3, 'ecbb98cc-e65f-4aaa-a0d0-834e9d113a4c', 'kd03', 'Tinta Spidol', 'Black', 10, 'Bagus', '2022-11-10 07:00:00', 600000, '1674836373116-61f9f03ce67fb6721ddd95716ebf20c7.png', 'http://52.199.149.14:2024/images/jbarang/1674836373116-61f9f03ce67fb6721ddd95716ebf20c7.png', 5, '2023-01-27 22:58:38', '2023-01-27 23:19:33');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, '2e1596e0-f5f4-4c77-b2d5-d6c178ea0727', 'wahyu', 'wahyu@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$09pe9tFuR93S++U2lWt66w$Zw6A9uNEczK+ZkQP56HFliQbybQKrH+HAR46aNkSTaQ', 'admin', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMmUxNTk2ZTAtZjVmNC00Yzc3LWIyZDUtZDZjMTc4ZWEwNzI3IiwibmFtZSI6IndhaHl1IiwiZW1haWwiOiJ3YWh5dUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzQ4Mzc2MTcsImV4cCI6MTY3NDkyNDAxN30.fwCYQRCOyYMw0WblYzTJXyp05mHzN2jBxtRLAY0U7n4', '2023-01-26 21:27:02', '2023-01-27 23:40:17'),
(3, 'd0445363-081e-4e64-9817-90927b97f7fd', 'budi', 'budi@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$5F/2kcxXQ5IPPk3Vadpbbg$FV3iHKW4WjGxrhH8KdjUkRlV3Y8zbczQkFfg33bRb4U', 'ketuajurusan', NULL, '2023-01-26 21:27:28', '2023-01-27 23:40:38'),
(5, '41613ddd-2006-47d2-8472-e8b7e310ad45', 'adam', 'adam@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$45+IrsGW5clQcGOWx4DDCQ$tu8/ZgdWWdbQg3lstUajAd8EoqlyzgFb6szixX3RApU', 'operator', NULL, '2023-01-27 16:19:39', '2023-01-27 23:40:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Sessions`
--
ALTER TABLE `Sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `tb_barang`
--
ALTER TABLE `tb_barang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `tb_jasabarang`
--
ALTER TABLE `tb_jasabarang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_barang`
--
ALTER TABLE `tb_barang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tb_jasabarang`
--
ALTER TABLE `tb_jasabarang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tb_barang`
--
ALTER TABLE `tb_barang`
  ADD CONSTRAINT `tb_barang_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tb_jasabarang`
--
ALTER TABLE `tb_jasabarang`
  ADD CONSTRAINT `tb_jasabarang_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
