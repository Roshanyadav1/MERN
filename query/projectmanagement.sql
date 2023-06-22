-- CREATE TABLE `User_new` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
--   `updatedAt` DATETIME(3) NOT NULL,
--   `email` VARCHAR(255) NOT NULL,
--   `firstName` VARCHAR(255) NOT NULL,
--   `lastName` VARCHAR(255) NOT NULL,
--   `password` VARCHAR(255) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `User_email_key` (`email`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- INSERT INTO `User_new` (`createdAt`, `updatedAt`, `email`, `firstName`, `lastName`, `password`)
-- SELECT `createdAt`, `updatedAt`, `email`, `firstName`, `lastName`, `password` FROM `User`;

-- ALTER TABLE `project` 
-- ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`ownerId`) REFERENCES `user` (`id`);


-- CreateEnum
-- CREATE TABLE `Task_Status` (
--   `id` INT(11) NOT NULL AUTO_INCREMENT,
--   `status` ENUM('NOT_STARTED', 'STARTED', 'COMPLETED') NOT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- CreateTable
-- CREATE TABLE `User` (
--   `id` VARCHAR(36) NOT NULL AUTO_INCREMENT,
--   `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
--   `updatedAt` DATETIME(3) NOT NULL,
--   `email` VARCHAR(255) NOT NULL,
--   `firstName` VARCHAR(255) NOT NULL,
--   `lastName` VARCHAR(255) NOT NULL,
--   `password` VARCHAR(255) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `User_email_key` (`email`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 -- CreateTable
-- CREATE TABLE `Project` (
--    `id` VARCHAR(36) NOT NULL,
--    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
--    `updatedAt` DATETIME(3) NOT NULL,
--    `name` VARCHAR(255) NOT NULL,
--    `ownerId` VARCHAR(36) NOT NULL,
--    `description` TEXT,
--    `due` DATETIME(3),
--    `deleted` BOOLEAN NOT NULL DEFAULT false,
--    PRIMARY KEY (`id`),
--    UNIQUE KEY `Project_ownerId_name_key` (`ownerId`,`name`),
--    KEY `Project_ownerId_id_idx` (`ownerId`,`id`),
--    CONSTRAINT `Project_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
--  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -- -- CreateTable
--  CREATE TABLE `Task` (
--   `id` VARCHAR(36) NOT NULL,
--   `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
--   `updatedAt` DATETIME(3) NOT NULL,
--   `status` ENUM('NOT_STARTED', 'STARTED', 'COMPLETED') NOT NULL DEFAULT 'NOT_STARTED',
--   `name` VARCHAR(255) NOT NULL,
--   `ownerId` VARCHAR(36) NOT NULL,
--   `projectId` VARCHAR(36) NOT NULL,
--   `due` DATETIME(3),
--   `deleted` BOOLEAN NOT NULL DEFAULT false,
--   PRIMARY KEY (`id`),
--   KEY `Task_ownerId_idx` (`ownerId`),
--   CONSTRAINT `Task_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
--   CONSTRAINT `Task_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
