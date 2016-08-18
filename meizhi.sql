/*
Navicat MySQL Data Transfer

Source Server         : haha
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : meizhi

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2016-08-18 14:42:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tb_meizhi
-- ----------------------------
DROP TABLE IF EXISTS `tb_meizhi`;
CREATE TABLE `tb_meizhi` (
  `id` varchar(255) NOT NULL,
  `fileName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `aa` (`id`) USING BTREE,
  CONSTRAINT `hh` FOREIGN KEY (`id`) REFERENCES `tb_person` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of tb_meizhi
-- ----------------------------
INSERT INTO `tb_meizhi` VALUES ('123', '345');

-- ----------------------------
-- Table structure for tb_person
-- ----------------------------
DROP TABLE IF EXISTS `tb_person`;
CREATE TABLE `tb_person` (
  `id` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `aa` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_person
-- ----------------------------
INSERT INTO `tb_person` VALUES ('123', '123', '123');

-- ----------------------------
-- View structure for showalltb_meizhi
-- ----------------------------
DROP VIEW IF EXISTS `showalltb_meizhi`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `showalltb_meizhi` AS select `tb_meizhi`.`id` AS `id`,`tb_meizhi`.`fileName` AS `fileName` from `tb_meizhi` ;

-- ----------------------------
-- View structure for showpersondetails
-- ----------------------------
DROP VIEW IF EXISTS `showpersondetails`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `showpersondetails` AS select `tb_meizhi`.`id` AS `personId`,`tb_meizhi`.`fileName` AS `fileName`,`tb_person`.`age` AS `age` from (`tb_meizhi` join `tb_person` on((`tb_meizhi`.`id` = `tb_person`.`id`))) order by `tb_person`.`id` ;

-- ----------------------------
-- Procedure structure for tb_meizhi_deleteAll
-- ----------------------------
DROP PROCEDURE IF EXISTS `tb_meizhi_deleteAll`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `tb_meizhi_deleteAll`()
BEGIN
	#Routine body goes here...
	DELETE FROM tb_meizhi;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for tb_meizhi_deleteById
-- ----------------------------
DROP PROCEDURE IF EXISTS `tb_meizhi_deleteById`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `tb_meizhi_deleteById`(`whereBy` varchar(255))
BEGIN
	#Routine body goes here...
	DELETE FROM tb_meizhi WHERE id= whereBy;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for tb_meizhi_insert
-- ----------------------------
DROP PROCEDURE IF EXISTS `tb_meizhi_insert`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `tb_meizhi_insert`(`id` varchar(255),`fileName` varchar(255))
BEGIN
	#Routine body goes here...
	INSERT tb_meizhi(id,fileName) VALUES(id,fileName);
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for tb_meizhi_update_fileName
-- ----------------------------
DROP PROCEDURE IF EXISTS `tb_meizhi_update_fileName`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `tb_meizhi_update_fileName`(`id` varchar(255),`newFileName` varchar(255))
BEGIN
	#Routine body goes here...
	UPDATE tb_meizhi SET fileName=newFileName where id=id;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for tb_person_deleteAll
-- ----------------------------
DROP PROCEDURE IF EXISTS `tb_person_deleteAll`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `tb_person_deleteAll`()
BEGIN
	#Routine body goes here...
	DELETE FROM tb_person;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for tb_person_deleteById
-- ----------------------------
DROP PROCEDURE IF EXISTS `tb_person_deleteById`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `tb_person_deleteById`(`whereBy` varchar(255))
BEGIN
	#Routine body goes here...
	DELETE FROM tb_person WHERE id= whereBy;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for tb_person_insert
-- ----------------------------
DROP PROCEDURE IF EXISTS `tb_person_insert`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `tb_person_insert`(`id` varchar(255),`age` int,`name` varchar(255))
BEGIN
	#Routine body goes here...
	INSERT tb_person(id,age,name) VALUES(id,age,name);
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for tb_person_update
-- ----------------------------
DROP PROCEDURE IF EXISTS `tb_person_update`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `tb_person_update`(`id` varchar(255),`age` int,`name` varchar(255))
BEGIN
	#Routine body goes here...
	UPDATE tb_person SET age=age ,name=name where id=id;
END
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `insert`;
DELIMITER ;;
CREATE TRIGGER `insert` BEFORE INSERT ON `tb_meizhi` FOR EACH ROW BEGIN
call meizhi.tb_person_insert(new.id,123,new.id);
END
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `update`;
DELIMITER ;;
CREATE TRIGGER `update` AFTER UPDATE ON `tb_meizhi` FOR EACH ROW BEGIN
update tb_person set id=new.id where id =old.id;
END
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `delete`;
DELIMITER ;;
CREATE TRIGGER `delete` AFTER DELETE ON `tb_meizhi` FOR EACH ROW BEGIN
delete from  tb_person where id=old.id;
END
;;
DELIMITER ;
