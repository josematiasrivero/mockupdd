DROP DATABASE IF EXISTS `mockupdd`;

CREATE DATABASE `mockupdd`;

USE `mockupdd`;

CREATE TABLE `user` (
	`id` bigint(20) NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(`id`)
);

CREATE TABLE `project` (
	`id` bigint(20) NOT NULL AUTO_INCREMENT,
	`user_id` bigint(20) NOT NULL,
	`name` varchar(128) NOT NULL,
	PRIMARY KEY(`id`),
	CONSTRAINT FK_project_user FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
);

CREATE TABLE `mockupdd` (
	`id` bigint(20) NOT NULL AUTO_INCREMENT,
	`project_id` bigint(20) NOT NULL,
	`name` varchar(128) NOT NULL,
	`json` MEDIUMTEXT NOT NULL,
	PRIMARY KEY(`id`),
	CONSTRAINT FK_mockup_project FOREIGN KEY (`project_id`) REFERENCES `project` (`id`)
);

