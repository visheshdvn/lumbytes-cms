-- DropForeignKey
ALTER TABLE "Blogposts" DROP CONSTRAINT "Blogposts_authorId_fkey";

-- AlterTable
ALTER TABLE "Blogposts" ALTER COLUMN "authorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Blogposts" ADD CONSTRAINT "Blogposts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE SET NULL ON UPDATE CASCADE;
