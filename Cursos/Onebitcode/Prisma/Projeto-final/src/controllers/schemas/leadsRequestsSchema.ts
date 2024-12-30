import { z } from "zod";

export const LeadStatusSchema = z.enum([
    "New",
    "Contacted",
    "Qualified",
    "Converted",
    "Unresponsive",
    "Disqualified",
    "Archived"
])

export const LeadCampaignStatusSchema = z.enum([
    "New",
    "Engaged",
    "FollowUp_Scheduled",
    "Contacted",
    "Qualified",
    "Converted",
    "Unresponsive",
    "Disqualified",
    "Re_engaged",
    "Opted_Out",
    "Archived"
])

export const GetLeadsRequestSchema = z.object({
    page: z.string().optional(),
    pageSize: z.string().optional(),
    name: z.string().optional(),
    status: LeadStatusSchema.optional(),
    sortBy: z.enum(["name", "status", "createdAt"]).optional(),
    order: z.enum(["asc", "desc"]).optional()
})

export const CreateLeadRequestsSchema = z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    status: LeadStatusSchema.optional(),
})

export const UpdateLeadRequestsSchema = z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    status: LeadStatusSchema.optional()
})