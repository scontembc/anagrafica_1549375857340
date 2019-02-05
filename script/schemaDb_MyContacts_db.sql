--
-- Database: `mycontacts_db`
--

CREATE DATABASE IF NOT EXISTS `mycontacts_db`;
USE `mycontacts_db`;


-- ENTITIES

--
-- Struttura della tabella `company`
--

CREATE TABLE IF NOT EXISTS `company` (
	`address` varchar(40) ,
	`mail` varchar(40) ,
	`name` varchar(40) ,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
	`email` varchar(40) ,
	`name` varchar(40)  NOT NULL,
	`note` varchar(40) ,
	`phone` varchar(40) ,
	`surname` varchar(40) ,
	
	-- RELAZIONI
	`company` int(11)  REFERENCES company(_id),

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`mail` varchar(40) ,
	`name` varchar(40) ,
	`password` varchar(40)  NOT NULL,
	`roles` varchar(40) ,
	`surname` varchar(40) ,
	`username` varchar(40)  NOT NULL,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

INSERT INTO `mycontacts_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '1a1dc91c907325c69271ddf0c944bc72', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `mycontacts_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);






