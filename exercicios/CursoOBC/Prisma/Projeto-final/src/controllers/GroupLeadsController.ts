import { Handler } from "express"
import { prisma } from "../database"
import { GetGroupLeadsRequestSchema } from "./schemas/groupsRequestSchema"
import { LeadStatus, Prisma } from "@prisma/client"

export class GroupLeadsController {
    index: Handler = async (req, res, next) => {
        try {
            const groupId = Number(req.params.groupId)
            const query = GetGroupLeadsRequestSchema.parse(req.query)
            const { page = '1', pageSize = '10', sortBy = 'name', order = 'asc', name, status } = query

            const pageNumber = Number(page)
            const pageSizeNumber = Number(pageSize)
            const skip = (pageNumber - 1) * pageSizeNumber

            const where: Prisma.LeadWhereInput = {
                groups: {
                    some: { id: groupId }
                }
            }

            if (name) where.name = { contains: name, mode: 'insensitive' }
            if (status) where.status = status as LeadStatus

            const leads = await prisma.lead.findMany({
                where,
                skip,
                take: pageSizeNumber,
                orderBy: {
                    [sortBy]: order
                },
                include: {
                    groups: {
                        select: {
                            id: true,
                            name: true
                        },
                    },
                },
            })
            const totalLeads = await prisma.lead.count({ where })
            const totalPages = Math.ceil(totalLeads / pageSizeNumber)

            res.json({
                leads,
                meta: {
                    page: pageNumber,
                    pageSize: pageSizeNumber,
                    totalPages,
                    totalLeads
                }
            })

        } catch (error) {
            next(error)
        }
    }

    addLead: Handler = async (req, res, next) => {
        try {
            const updatedGroup = await prisma.group.update({
                where: { id: Number(req.params.groupId) },
                data: {
                    leads: { connect: { id: Number(req.params.leadId) } },
                },
                include: { leads: true },
            })

            res.status(201).json(updatedGroup)
        } catch (error) {
            next(error)
        }
    }

    deleteLead: Handler = async (req, res, next) => {
        try {
            const updatedGroup = await prisma.group.update({
                where: { id: Number(req.params.groupId) },
                data: {
                    leads: { disconnect: { id: Number(req.params.leadId) } }
                },
                include: { leads: true }
            })
            res.json(updatedGroup)
        } catch (error) {
            next(error)
        }

    }
}