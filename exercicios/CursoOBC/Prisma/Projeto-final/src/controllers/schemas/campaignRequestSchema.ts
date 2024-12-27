import { z } from "zod";
import { LeadCampaignStatusSchema, LeadStatusSchema } from "./leadsRequestsSchema";

export const CampaignRequestSchema = z.object({
    name: z.
        string(),
    description: z.
        string(),
    startDate: z.
        coerce.
        date(),
    endDate: z.
        coerce.
        date().
        optional()
})

export const UpdateCampaignRequestSchema = z.object({
    name: z.
        string().optional(),
    description: z.
        string().optional(),
    startDate: z.
        coerce.
        date().optional(),
    endDate: z.
        coerce.
        date().optional()
})

export const GetCampaignLeadsRequestSchema = z.object({
    page: z.string().optional(),
    pageSize: z.string().optional(),
    name: z.string().optional(),
    status: LeadCampaignStatusSchema.optional(),
    sortBy: z.enum(["name", "createdAt"]).optional(),
    order: z.enum(["asc", "desc"]).optional()
})


export const UpdateCampaignLeadsRequestSchema = z.object({
    status: LeadStatusSchema
})

