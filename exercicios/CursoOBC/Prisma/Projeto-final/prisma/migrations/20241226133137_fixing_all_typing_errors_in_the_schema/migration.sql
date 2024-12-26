/*
  Warnings:

  - The values [FllowUp_Scheduled] on the enum `LeadCampaignStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `enDate` on the `Campaign` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "LeadCampaignStatus_new" AS ENUM ('New', 'Engaged', 'FollowUp_Scheduled', 'Contacted', 'Converted', 'Unresponsive', 'Qualified', 'Disqualified', 'Re_engaged', 'Opted_Out');
ALTER TABLE "LeadCampaign" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "LeadCampaign" ALTER COLUMN "status" TYPE "LeadCampaignStatus_new" USING ("status"::text::"LeadCampaignStatus_new");
ALTER TYPE "LeadCampaignStatus" RENAME TO "LeadCampaignStatus_old";
ALTER TYPE "LeadCampaignStatus_new" RENAME TO "LeadCampaignStatus";
DROP TYPE "LeadCampaignStatus_old";
ALTER TABLE "LeadCampaign" ALTER COLUMN "status" SET DEFAULT 'New';
COMMIT;

-- AlterTable
ALTER TABLE "Campaign" DROP COLUMN "enDate",
ADD COLUMN     "endDate" TIMESTAMP(3);
