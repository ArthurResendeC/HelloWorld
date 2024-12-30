import { addLeadToCampaignAttributes, CampaignModel, CampaignsRepository, CreateCampaignAttributes } from "../CampaignsRepository";
import { prisma } from "../../database";

export class PrismaCampaignsRepository implements CampaignsRepository {
    findMany(): Promise<CampaignModel[]> {
        return prisma.campaign.findMany()
    }

    create(CreateCampaignAttributes: CreateCampaignAttributes): Promise<CampaignModel> {
        return prisma.campaign.create({
            data: CreateCampaignAttributes
        })
    }

    findById(id: number): Promise<CampaignModel | null> {
        return prisma.campaign.findUnique({
            where: { id },
            include: {
                leads: { include: { lead: true } }
            }
        })
    }

    async updateById(id: number, attributes: Partial<CreateCampaignAttributes>): Promise<CampaignModel | null> {
        const campaignExists = await prisma.campaign.findUnique({where: {id} })
        if (!campaignExists) return null
        return prisma.campaign.update({
            where: { id }, data: attributes
        })
    }

    async deleteById(id: number): Promise<CampaignModel| null> {
        const campaignExists = await prisma.campaign.findUnique({where: {id} })
        if (!campaignExists) return null
        return prisma.campaign.delete({
            where: { id }
        })
    }

    async addLead(attributes: addLeadToCampaignAttributes): Promise<void> {
        await prisma.leadCampaign.create({data: attributes})
    }

    async updateLeadStatus(attributes: addLeadToCampaignAttributes): Promise<void> {
        await prisma.leadCampaign.update({
            data: {status: attributes.status},
            where: {
                leadId_campaignId: {
                    campaignId: attributes.campaignId,
                    leadId: attributes.leadId
                }
            }
        })
    }

    async removeLead (campaignId: number, leadId: number): Promise<void> {
        await prisma.leadCampaign.delete({
            where: {
                leadId_campaignId: {campaignId, leadId}	
            }
        })
    }

}