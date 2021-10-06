/*
  Warnings:

  - You are about to drop the column `name` on the `Author` table. All the data in the column will be lost.
  - Added the required column `about` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dp` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dpalt` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `Blogposts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banneralt` to the `Blogposts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Author" DROP COLUMN "name",
ADD COLUMN     "a365px" VARCHAR(15),
ADD COLUMN     "about" VARCHAR(200) NOT NULL,
ADD COLUMN     "behance" VARCHAR(15),
ADD COLUMN     "dp" TEXT NOT NULL,
ADD COLUMN     "dpalt" TEXT NOT NULL,
ADD COLUMN     "email" VARCHAR(50),
ADD COLUMN     "facebook" VARCHAR(15),
ADD COLUMN     "firstname" VARCHAR(50) NOT NULL,
ADD COLUMN     "github" VARCHAR(15),
ADD COLUMN     "instagram" VARCHAR(15),
ADD COLUMN     "lastname" VARCHAR(50) NOT NULL,
ADD COLUMN     "linkedin" VARCHAR(15),
ADD COLUMN     "phone" VARCHAR(15),
ADD COLUMN     "pintrest" VARCHAR(15),
ADD COLUMN     "twitter" VARCHAR(15),
ADD COLUMN     "username" VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE "Blogposts" ADD COLUMN     "authorId" TEXT NOT NULL,
ADD COLUMN     "banneralt" VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE "Tags" (
    "id" SERIAL NOT NULL,
    "tagname" VARCHAR(40) NOT NULL,
    "color" VARCHAR(40),
    "metaDescription" VARCHAR(40),
    "ogimg" VARCHAR(250),
    "ogalt" VARCHAR(30) NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagsToPosts" (
    "id" SERIAL NOT NULL,
    "blogpostsId" INTEGER NOT NULL,
    "tagsId" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TagsToPosts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Blogposts" ADD CONSTRAINT "Blogposts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsToPosts" ADD CONSTRAINT "TagsToPosts_blogpostsId_fkey" FOREIGN KEY ("blogpostsId") REFERENCES "Blogposts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsToPosts" ADD CONSTRAINT "TagsToPosts_tagsId_fkey" FOREIGN KEY ("tagsId") REFERENCES "Tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
