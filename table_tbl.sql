-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 192.168.1.25    Database: qdn_db
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `table_tbl`
--

DROP TABLE IF EXISTS `table_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `table_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `table_name` varchar(45) DEFAULT NULL,
  `table_area` varchar(45) DEFAULT NULL,
  `table_description` varchar(145) DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(45) DEFAULT NULL,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_tbl`
--

LOCK TABLES `table_tbl` WRITE;
/*!40000 ALTER TABLE `table_tbl` DISABLE KEYS */;
INSERT INTO `table_tbl` VALUES (1,'01OVEN_T','Oven/Bake','<p>OVEN/BAKE</p>',NULL,'2025-03-14 13:22:39',NULL,'2025-03-14 14:44:51'),(2,'02OVEN_T','Oven/Bake','Oven/Bake',NULL,'2025-03-14 13:24:29',NULL,'2025-03-14 13:24:29'),(3,'03OVEN_T','Oven/Bake','<p>Oven/Bake</p>',NULL,'2025-03-14 13:24:41',NULL,'2025-03-14 13:24:41'),(4,'04OVEN_T','Oven/Bake','<p>Oven/Bake</p>',NULL,'2025-03-14 13:24:51',NULL,'2025-03-14 13:24:51'),(5,'05OVEN_T','Oven/Bake','<p>Oven/Bake</p>',NULL,'2025-03-14 13:25:02',NULL,'2025-03-14 13:25:02'),(6,'06OVEN_T','Oven/Bake','<p>Oven/Bake</p>',NULL,'2025-03-14 13:25:11',NULL,'2025-03-14 13:25:11'),(7,'07OVEN_T','Oven/Bake','<p>Oven/Bake</p>',NULL,'2025-03-14 13:25:21',NULL,'2025-03-14 13:25:21'),(8,'08OVEN_T','Oven/Bake','<p>Oven/Bake</p>',NULL,'2025-03-14 13:25:33',NULL,'2025-03-14 13:25:33'),(9,'01FVI_T','Final Visual Inspection (FVI)','<p>FVI Table</p>',NULL,'2025-03-14 13:26:26',NULL,'2025-03-14 13:26:26'),(10,'02FVI_T','Final Visual Inspection (FVI)','<p>FVI Table</p>',NULL,'2025-03-14 13:26:59',NULL,'2025-03-14 13:26:59'),(11,'03FVI_T','Final Visual Inspection (FVI)','<p>FVI Table</p>',NULL,'2025-03-14 13:27:21',NULL,'2025-03-14 13:27:21'),(12,'04FVI_T','Final Visual Inspection (FVI)','<p>FVI Table</p>',NULL,'2025-03-14 13:27:48',NULL,'2025-03-14 13:27:48'),(13,'05FVI_T','Final Visual Inspection (FVI)','<p>FVI Table</p>',NULL,'2025-03-14 13:28:06',NULL,'2025-03-14 13:28:06'),(14,'06FVI_T','Final Visual Inspection (FVI)','<p>FVI Table</p>',NULL,'2025-03-14 13:28:26',NULL,'2025-03-14 13:28:26'),(15,'07FVI_T','Final Visual Inspection (FVI)','<p>FVI Table</p>',NULL,'2025-03-14 13:28:46',NULL,'2025-03-14 13:28:46'),(16,'08FVI_T','Final Visual Inspection (FVI)','<p>FVI Table</p>',NULL,'2025-03-14 13:29:00',NULL,'2025-03-14 13:29:00'),(17,'09FVI_T','Final Visual Inspection (FVI)','<p>&nbsp;<span style=\"font-size: 1rem;\">FVI Table</span></p>',NULL,'2025-03-14 13:30:17',NULL,'2025-03-14 13:30:17'),(18,'24FVI_T','Final Visual Inspection (FVI)','<p>BRAND&nbsp;<span style=\"font-size: 1rem;\">FVI Table</span></p>',NULL,'2025-03-14 13:31:07',NULL,'2025-03-14 13:31:07'),(19,'25FVI_T','Final Visual Inspection (FVI)','<p>BRAND&nbsp;<span style=\"font-size: 1rem;\">FVI Table</span></p>',NULL,'2025-03-14 13:31:22',NULL,'2025-03-14 13:31:22'),(20,'52FVI_T','Final Visual Inspection (FVI)','<p>BRAND&nbsp;<span style=\"font-size: 1rem;\">FVI Table</span></p>',NULL,'2025-03-14 13:31:37',NULL,'2025-03-14 13:31:37');
/*!40000 ALTER TABLE `table_tbl` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-01-08 15:14:03
