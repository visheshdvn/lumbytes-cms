/*
  Warnings:

  - Made the column `slug` on table `Blogposts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Blogposts" ALTER COLUMN "slug" SET NOT NULL;
