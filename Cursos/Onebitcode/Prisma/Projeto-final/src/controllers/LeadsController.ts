import { Handler } from "express";
import { CreateLeadRequestsSchema, GetLeadsRequestSchema, UpdateLeadRequestsSchema } from "./schemas/leadsRequestsSchema";
import { HttpError } from "../errors/HttpError";
import { LeadsRepository, LeadStatus, LeadWhereParams } from "../repositories/LeadsRepository"
export class LeadsController {
    private leadsRepository: LeadsRepository

    constructor(leadsRepository: LeadsRepository) {
        this.leadsRepository = leadsRepository
    }

    index: Handler = async (req, res, next) => {
        try {
            const query = GetLeadsRequestSchema.parse(req.query)
            const { page = '1', pageSize = "10", name, status, sortBy = 'createdAt', order = 'asc' } = query

            const limit = Number(pageSize)
            const offset = (Number(page) - 1) * limit

            const where: LeadWhereParams = {}

            if (name) where.name = { like: name, mode: "insensitive" }
            if (status) where.status = status as LeadStatus

            const leads = await this.leadsRepository.find({
                where,
                order,
                sortBy,
                limit,
                offset
            })
            const total = await this.leadsRepository.count(where)

            // const leads = await prisma.lead.findMany({
            //     where,
            //     skip: (pageNumber - 1) * pageSizeNumber,
            //     take: pageSizeNumber,
            //     orderBy: { [sortBy]: order }
            // })
            // const total = await prisma.lead.count({ where })

            res.json({
                data: leads,
                meta: {
                    page: Number(page),
                    pageSize: limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            })
        } catch (error) {
            next(error)
        }
    }

    create: Handler = async (req, res, next) => {
        try {
            const body = CreateLeadRequestsSchema.parse(req.body)

            const newLead = await this.leadsRepository.create(body)

            // const newLead = await prisma.lead.create({
            //     data: body as Prisma.LeadCreateInput
            // })

            res.status(201).json(newLead)
        } catch (error) {
            next(error)
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const lead = await this.leadsRepository.findById(Number(req.params.id))
            // const lead = await prisma.lead.findUnique({
            //     where: { id: Number(req.params.id) },
            //     include: {
            //         groups: true,
            //         campaigns: true
            //     }
            // })
            if (!lead) throw new HttpError(404, "Lead não encontrado...")
            res.json(lead)
        } catch (error) {
            next(error)
        }
    }

    update: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const body = UpdateLeadRequestsSchema.parse(req.body)

            const leadExists = await this.leadsRepository.findById(id)
            // const leadExists = await prisma.lead.findUnique({ where: { id } })

            if (!leadExists) throw new HttpError(404, "Lead não encontrado...")

            if (body.status && leadExists.status === "New" && body.status !== "Contacted") {
                throw new HttpError(
                    400,
                    "Não é possível alterar o status de um lead novo para qualquer outro status diferente de 'Contacted'"
                )
            }

            if (body.status && body.status === "Archived") {
                const now = new Date()
                const timeDiff = Math.abs(now.getTime() - leadExists.updatedAt.getTime())
                const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))

                if (daysDiff < 180) throw new HttpError(400, "Um lead só pode ser arquivado após 6 meses de inatividade!")
            }

            const updatedLead = await this.leadsRepository.updateById(id, body)
            // const updatedLead = await prisma.lead.update({ data: body as Prisma.LeadUpdateInput, where: { id } })

            res.json(updatedLead)
        } catch (error) {
            next(error)
        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)

            const leadExists = await this.leadsRepository.findById(id)
            // const leadExists = await prisma.lead.findUnique({ where: { id } })
            if (!leadExists) throw new HttpError(404, "Lead não encontrado...")

            const deletedLead = await this.leadsRepository.deleteById(id)
            // const deletedLead = await prisma.lead.delete({ where: { id } })

            res.json(deletedLead)
        } catch (error) {
            next(error)
        }
    }
}