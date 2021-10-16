-- DropForeignKey
ALTER TABLE "Blogposts" DROP CONSTRAINT "Blogposts_topicsId_fkey";

-- AlterTable
ALTER TABLE "Blogposts" ALTER COLUMN "topicsId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Blogposts" ADD CONSTRAINT "Blogposts_topicsId_fkey" FOREIGN KEY ("topicsId") REFERENCES "Topics"("id") ON DELETE SET NULL ON UPDATE CASCADE;
