/*
  Warnings:

  - Made the column `published_at` on table `Blogposts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Blogposts" ALTER COLUMN "published_at" SET NOT NULL;
