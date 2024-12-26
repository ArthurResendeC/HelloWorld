/*
  Warnings:

  - You are about to drop the column `endDate` on the `Campaign` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Campaign" DROP COLUMN "endDate",
ADD COLUMN     "enDate" TIMESTAMP(3);
