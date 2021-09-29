-- CreateTable
CREATE TABLE "Blogposts" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "slug" TEXT NOT NULL,
    "metaDescription" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "topPick" BOOLEAN NOT NULL DEFAULT false,
    "minuteRead" SMALLINT NOT NULL,
    "date" TIMESTAMPTZ(0) NOT NULL,

    CONSTRAINT "Blogposts_pkey" PRIMARY KEY ("id")
);
