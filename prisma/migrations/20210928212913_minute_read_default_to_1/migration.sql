/*
  Warnings:

  - Added the required column `banner` to the `Blogposts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `Blogposts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `published_at` to the `Blogposts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `upadted_at` to the `Blogposts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blogposts" ADD COLUMN     "banner" VARCHAR(255) NOT NULL,
ADD COLUMN     "created_at" TIMESTAMPTZ(3) NOT NULL,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "published_at" TIMESTAMPTZ(3) NOT NULL,
ADD COLUMN     "upadted_at" TIMESTAMP(3) NOT NULL;
