export type LeadCampaignStatus = "New" | "Contacted" | "Converted" | "Unresponsive" | "Qualified" | "Disqualified" | "Archived" | "Engaged" | "FollowUp_Scheduled" | "Re_engaged" | "Opted_Out"

export type CampaignModel = {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date | null;
}

export type CreateCampaignAttributes = {
    name: string;
    description: string;
    startDate: Date;
    endDate?: Date
}

export interface addLeadToCampaignAttributes {
    campaignId: number,
    leadId: number,
    status: LeadCampaignStatus
}

export interface CampaignsRepository {
    findMany: () => Promise<CampaignModel[]>
    findById: (id: number) => Promise<CampaignModel | null>
    create: (CreateCampaignAttributes: CreateCampaignAttributes) => Promise<CampaignModel>
    updateById: (id: number, attributes: Partial<CreateCampaignAttributes>) => Promise<CampaignModel | null>
    deleteById: (id: number) => Promise<CampaignModel | null>
    addLead: (attributes: addLeadToCampaignAttributes) => Promise<void>
    updateLeadStatus: (attributes: addLeadToCampaignAttributes) => Promise<void>
    removeLead: (campaignId: number, leadId: number) => Promise<void>
}