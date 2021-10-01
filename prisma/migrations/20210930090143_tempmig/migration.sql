/*
  Warnings:

  - Added the required column `asd` to the `Blogposts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blogposts" ADD COLUMN     "asd" TEXT NOT NULL;
