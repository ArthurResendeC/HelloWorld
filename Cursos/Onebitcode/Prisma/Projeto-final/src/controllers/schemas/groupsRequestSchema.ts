import { z } from "zod";
import { LeadStatusSchema } from "./leadsRequestsSchema";

export const CreateGroupRequestSchema = z.object({
    name: z.string(),
    description: z.string()
})

export const UpdateGroupRequestSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional()
})

export const GetGroupLeadsRequestSchema = z.object({
    page: z.string().optional(),
    pageSize: z.string().optional(),
    name: z.string().optional(),
    status: LeadStatusSchema.optional(),
    sortBy: z.enum(["name", "createdAt"]).optional(),
    order: z.enum(["asc", "desc"]).optional()
})