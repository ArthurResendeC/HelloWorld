/*
  Warnings:

  - You are about to drop the column `enDate` on the `Campaign` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Campaign" DROP COLUMN "enDate",
ADD COLUMN     "endDate" TIMESTAMP(3);
