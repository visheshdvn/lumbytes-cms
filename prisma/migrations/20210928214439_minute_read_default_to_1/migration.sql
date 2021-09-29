/*
  Warnings:

  - You are about to alter the column `title` on the `Blogposts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(150)`.

*/
-- AlterTable
ALTER TABLE "Blogposts" ALTER COLUMN "title" SET DATA TYPE VARCHAR(150),
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Author" (
    "id" UUID NOT NULL,
    "name" VARBIT(40) NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);
