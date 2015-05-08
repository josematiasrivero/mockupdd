DROP DATABASE IF EXISTS `mockupdd`;

CREATE DATABASE `mockupdd`;

USE `mockupdd`;

CREATE TABLE `UserConnection` (
  `userId` varchar(255) NOT NULL,
  `providerId` varchar(255) NOT NULL,
  `providerUserId` varchar(255) NOT NULL DEFAULT '',
  `rank` int(11) NOT NULL,
  `displayName` varchar(255) DEFAULT NULL,
  `profileUrl` varchar(512) DEFAULT NULL,
  `imageUrl` varchar(512) DEFAULT NULL,
  `accessToken` varchar(255) NOT NULL,
  `secret` varchar(255) DEFAULT NULL,
  `refreshToken` varchar(255) DEFAULT NULL,
  `expireTime` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`userId`,`providerId`,`providerUserId`),
  UNIQUE KEY `UserConnectionRank` (`userId`,`providerId`,`rank`)
);

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `display_name` varchar(255) DEFAULT NULL,
   PRIMARY KEY(`id`)
);

CREATE TABLE `project` (
	`id` bigint(20) NOT NULL AUTO_INCREMENT,
	`user_id` bigint(20),
	`name` varchar(128) NOT NULL,
	PRIMARY KEY(`id`)
);

CREATE TABLE `mockup` (
	`id` bigint(20) NOT NULL AUTO_INCREMENT,
	`project_id` bigint(20) ,
	`name` varchar(128) NOT NULL,
	`json` MEDIUMTEXT,
	PRIMARY KEY(`id`),
	CONSTRAINT FK_mockup_project FOREIGN KEY (`project_id`) REFERENCES `project` (`id`)
);

CREATE TABLE `resource` (
	`id` varchar(255) NOT NULL,
	`data` MEDIUMBLOB,
	`media_type` varchar(128),
	PRIMARY KEY(`id`)	
);
