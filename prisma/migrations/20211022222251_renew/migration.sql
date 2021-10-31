/*
  Warnings:

  - The primary key for the `Blogposts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Blogposts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[A,B]` on the table `_BlogpostsToTags` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `A` on the `_BlogpostsToTags` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "_BlogpostsToTags" DROP CONSTRAINT "_BlogpostsToTags_A_fkey";

-- AlterTable
ALTER TABLE "Blogposts" DROP CONSTRAINT "Blogposts_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Blogposts_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_BlogpostsToTags" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_BlogpostsToTags_AB_unique" ON "_BlogpostsToTags"("A", "B");

-- AddForeignKey
ALTER TABLE "_BlogpostsToTags" ADD FOREIGN KEY ("A") REFERENCES "Blogposts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
