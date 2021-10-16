/*
  Warnings:

  - The primary key for the `Blogposts` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "TagsToPosts" DROP CONSTRAINT "TagsToPosts_blogpostsId_fkey";

-- AlterTable
ALTER TABLE "Blogposts" DROP CONSTRAINT "Blogposts_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Blogposts_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Blogposts_id_seq";

-- AlterTable
ALTER TABLE "TagsToPosts" ALTER COLUMN "blogpostsId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "TagsToPosts" ADD CONSTRAINT "TagsToPosts_blogpostsId_fkey" FOREIGN KEY ("blogpostsId") REFERENCES "Blogposts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
