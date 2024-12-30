import { Handler } from "express"
import { GetGroupLeadsRequestSchema } from "./schemas/groupsRequestSchema"
import { GroupsRepository } from "../repositories/GroupsRepository"
import { LeadsRepository, LeadWhereParams } from "../repositories/LeadsRepository"

export class GroupLeadsController {
    constructor(
        private readonly groupsRepository: GroupsRepository,
        private readonly leadsRepository: LeadsRepository
    ) { }
    index: Handler = async (req, res, next) => {
        try {
            const groupId = Number(req.params.groupId)
            const query = GetGroupLeadsRequestSchema.parse(req.query)
            const { page = '1', pageSize = '10', sortBy = 'name', order = 'asc', name, status } = query

            const pageNumber = Number(page)
            const limit = Number(pageSize)
            const offset = (pageNumber - 1) * limit

            const where: LeadWhereParams = { groupId }

            if (name) where.name = { like: name, mode: 'insensitive' }
            if (status) where.status = status

            const leads = await this.leadsRepository.find({ where, sortBy, order, limit, offset, include: { groups: true } })
            const totalLeads = await this.leadsRepository.count(where)
            const totalPages = Math.ceil(totalLeads / limit)

            res.json({
                leads,
                meta: {
                    page: pageNumber,
                    pageSize: limit,
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
            const groupId = Number(req.params.groupId)
            const leadId = Number(req.params.leadId)

            const updatedGroup = await this.groupsRepository.addLead(groupId, leadId)

            res.status(201).json(updatedGroup)
        } catch (error) {
            next(error)
        }
    }

    deleteLead: Handler = async (req, res, next) => {
        try {
            const groupId = Number(req.params.groupId)
            const leadId = Number(req.params.leadId)

            const updatedGroup = await this.groupsRepository.removeLead(groupId, leadId)
            res.json(updatedGroup)
        } catch (error) {
            next(error)
        }

    }
}