CREATE DATABASE `manageo` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE `manageo`;

CREATE TABLE `users`(
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    `firstname` VARCHAR(80) NOT NULL,
    `lastname` VARCHAR(80) NOT NULL,
    `mail` VARCHAR(255) NOT NULL
)Engine = InnoDB;