/*
  Warnings:

  - You are about to drop the `TagsToPosts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `upadted_at` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Made the column `title` on table `Blogposts` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `upadted_at` to the `Tags` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TagsToPosts" DROP CONSTRAINT "TagsToPosts_blogpostsId_fkey";

-- DropForeignKey
ALTER TABLE "TagsToPosts" DROP CONSTRAINT "TagsToPosts_tagsId_fkey";

-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "published_at" TIMESTAMPTZ(3),
ADD COLUMN     "upadted_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Blogposts" ALTER COLUMN "title" SET NOT NULL;

-- AlterTable
ALTER TABLE "Tags" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "published_at" TIMESTAMPTZ(3),
ADD COLUMN     "upadted_at" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "TagsToPosts";

-- CreateTable
CREATE TABLE "_BlogpostsToTags" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BlogpostsToTags_AB_unique" ON "_BlogpostsToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_BlogpostsToTags_B_index" ON "_BlogpostsToTags"("B");

-- AddForeignKey
ALTER TABLE "_BlogpostsToTags" ADD FOREIGN KEY ("A") REFERENCES "Blogposts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlogpostsToTags" ADD FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
