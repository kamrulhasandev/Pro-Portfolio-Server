-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('FULL_STACK', 'FRONTEND', 'BACKEND', 'OTHER');

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "githubServer" TEXT,
    "githubClient" TEXT,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "technologies" TEXT[],
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "type" "ProjectType" NOT NULL,
    "isOngoing" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
