/*
  Warnings:

  - You are about to alter the column `metaDescription` on the `Blogposts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `excerpt` on the `Blogposts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(150)`.

*/
-- AlterTable
ALTER TABLE "Author" ALTER COLUMN "published_at" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Blogposts" ALTER COLUMN "metaDescription" SET DATA TYPE VARCHAR(200),
ALTER COLUMN "excerpt" SET DATA TYPE VARCHAR(150),
ALTER COLUMN "date" SET DATA TYPE TIMESTAMP(0),
ALTER COLUMN "published_at" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Tags" ALTER COLUMN "published_at" SET DATA TYPE TIMESTAMP(3);
