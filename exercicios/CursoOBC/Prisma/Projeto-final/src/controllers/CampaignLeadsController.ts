import { Handler } from "express";
import { prisma } from "../database";
import { Prisma } from "@prisma/client";
import { GetCampaignLeadsRequestSchema, UpdateCampaignLeadsRequestSchema } from "./schemas/campaignRequestSchema";

export class CampaignLeadsController {
    getLeads: Handler = async (req, res, next) => {
        try {
            const campaignId = Number(req.params.campaignId)
            const query = GetCampaignLeadsRequestSchema.parse(req.query)
            const { page = '1', pageSize = '10', name, status, sortBy = 'name', order = 'asc' } = query

            const pageNumber = Number(page)
            const pageSizeNumber = Number(pageSize)

            const skip = (pageNumber - 1) * pageSizeNumber

            const where: Prisma.LeadWhereInput = {
                campaigns: {
                    some: { campaignId }
                }
            }

            if (name) where.name = { contains: name, mode: 'insensitive' }
            if (status) where.campaigns = { some: { status } }

            const leads = await prisma.lead.findMany({
                where,
                orderBy: { [sortBy]: order },
                skip,
                take: pageSizeNumber,
                include: {
                    campaigns: {
                        select: {
                            campaignId: true,
                            leadId: true,
                            status: true
                        }
                    }
                }
            })

            const total = await prisma.lead.count({ where })

            res.json({
                leads,
                meta: {
                    page: pageNumber,
                    pageSize: pageSizeNumber,
                    total,
                    totalPages: Math.ceil(total / pageSizeNumber)
                }
            })
        } catch (error) {
            next(error)
        }
    }

    addLead: Handler = async (req, res, next) => {
        try {
            await prisma.leadCampaign.create({
                data: {
                    campaignId: Number(req.params.campaignId),
                    leadId: Number(req.params.leadId)
                }
            })

            res.status(201).json({Message: "Lead adicionado com sucesso à campanha."})
        } catch (error) {
            next(error)
        }
    }

    updateleadStatus: Handler = async (req, res, next) => {
        try {
            const body = UpdateCampaignLeadsRequestSchema.parse(req.body)
            const updatedLeadCampaign = await prisma.leadCampaign.update({
                data: body,
                where: {
                    leadId_campaignId: {
                        campaignId: Number(req.params.campaignId),
                        leadId: Number(req.params.leadId)
                    }
                }
            })
            res.json(updatedLeadCampaign)

        } catch (error) {
            next(error)
        }
    }

    removeLead: Handler = async (req, res, next) => {
        try {
            const removedLead = await prisma.leadCampaign.delete({
                where: {
                    leadId_campaignId: {
                        campaignId: Number(req.params.campaignId),
                        leadId: Number(req.params.leadId)
                    }
                }
            })

            res.json({ removedLead })
        } catch (error) {
            next(error)
        }
    }

}