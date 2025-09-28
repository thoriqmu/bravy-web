-- CreateTable
CREATE TABLE `Event` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `startAt` DATETIME(3) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `brochureUrl` VARCHAR(191) NULL,
    `photos` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Event_startAt_idx`(`startAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FeaResult` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NULL,
    `durationSec` INTEGER NOT NULL,
    `confidence` INTEGER NOT NULL,
    `aus` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
