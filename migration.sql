-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Names` VARCHAR(20) NOT NULL,
    `Email` VARCHAR(50) NOT NULL,
    `Password` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `user_Email_key`(`Email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
