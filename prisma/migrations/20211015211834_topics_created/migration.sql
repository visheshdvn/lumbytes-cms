/*
  Warnings:

  - You are about to alter the column `color` on the `Tags` table. The data in that column could be lost. The data in that column will be cast from `VarChar(40)` to `VarChar(25)`.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `topicsId` to the `Blogposts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "about" DROP NOT NULL,
ALTER COLUMN "dp" DROP NOT NULL,
ALTER COLUMN "dpalt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Blogposts" ADD COLUMN     "topicsId" INTEGER NOT NULL,
ALTER COLUMN "slug" DROP NOT NULL,
ALTER COLUMN "metaDescription" DROP NOT NULL,
ALTER COLUMN "excerpt" DROP NOT NULL,
ALTER COLUMN "content" DROP NOT NULL,
ALTER COLUMN "featured" DROP NOT NULL,
ALTER COLUMN "topPick" DROP NOT NULL,
ALTER COLUMN "minuteRead" DROP NOT NULL,
ALTER COLUMN "date" DROP NOT NULL,
ALTER COLUMN "banner" DROP NOT NULL,
ALTER COLUMN "banneralt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Tags" ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "color" SET DATA TYPE VARCHAR(25),
ALTER COLUMN "metaDescription" SET DATA TYPE VARCHAR(200),
ALTER COLUMN "ogalt" DROP NOT NULL;

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "Topics" (
    "id" SERIAL NOT NULL,
    "topicname" VARCHAR(50),
    "metaDescription" VARCHAR(200),
    "ogimg" VARCHAR(250),
    "ogalt" VARCHAR(30),
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Topics_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Blogposts" ADD CONSTRAINT "Blogposts_topicsId_fkey" FOREIGN KEY ("topicsId") REFERENCES "Topics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
