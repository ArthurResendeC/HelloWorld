import { LeadCampaignStatus } from "./CampaignsRepository";

export type LeadStatus = "New" | "Contacted" | "Converted" | "Unresponsive" | "Qualified" | "Disqualified" | "Archived"

export type Lead = {
    name: string;
    id: number;
    email: string;
    phone: string;
    status: LeadStatus;
    createdAt: Date;
    updatedAt: Date;
}

export interface LeadWhereParams {
    name?: {
        like?: string,
        equals?: string,
        mode?: "default" | "insensitive"
    },
    status?: LeadStatus
    campaignStatus?: LeadCampaignStatus
    groupId?: number
    campaignId?: number
}

export interface findLeadsParams {
    where?: LeadWhereParams
    sortBy?: "name" | "status" | "createdAt"
    order?: "asc" | "desc"
    limit?: number
    offset?: number
    include?: {
        groups?: boolean,
        campaigns?: boolean
    }
}

export interface CreateLeadAttributes {
    name: string
    email: string
    phone: string
    status?: LeadStatus
}

export interface LeadsRepository {
    find: (params: findLeadsParams) => Promise<Lead[]>
    findById: (id: number) => Promise<Lead | null>
    count: (where: LeadWhereParams) => Promise<number>
    create: (attributes: CreateLeadAttributes) => Promise<Lead>
    updateById: (id: number, attributes: Partial<CreateLeadAttributes>) => Promise<Lead | null>
    deleteById: (id: number) => Promise<Lead | null>
}