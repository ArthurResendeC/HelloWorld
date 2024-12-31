import { HttpError } from "../errors/HttpError"
import { CreateLeadAttributes, LeadsRepository, LeadStatus, LeadWhereParams } from "../repositories/LeadsRepository"

interface GetLeadsWithPaginationParams {
    page?: number,
    pageSize?: number,
    name?: string,
    status?: LeadStatus,
    sortBy?: "name" | "status" | "createdAt",
    order?: "asc" | "desc"
}

export class LeadsService {
    constructor(private readonly leadsRepository: LeadsRepository) { }

    async getAllLeadsPaginated(params: GetLeadsWithPaginationParams) {
        const { name, order, page = 1, pageSize = 10, sortBy, status } = params

        const limit = pageSize
        const offset = (page - 1) * limit

        const where: LeadWhereParams = {}

        if (name) where.name = { like: name, mode: "insensitive" }
        if (status) where.status = status as LeadStatus

        const leads = await this.leadsRepository.find({ where, order, sortBy, limit, offset })
        const total = await this.leadsRepository.count(where)

        return {
            data: leads,
            meta: {
                page,
                pageSize,
                total,
                totalPages: Math.ceil(total / pageSize)
            }
        }
    }

    async createLead(body: CreateLeadAttributes) {
        const newLead = await this.leadsRepository.create(body)
        return { newLead }
    }

    async findLeadById(id: number) {
        const lead = await this.leadsRepository.findById(id)
        if (!lead) {
            throw new HttpError(404, "Lead não encontrado...")
        }
        return {
            lead
        }
    }

    async updateLead(id: number, attributes: Partial<CreateLeadAttributes>) {
        const leadExists = await this.leadsRepository.findById(id)

        if (!leadExists) throw new HttpError(404, "Lead não encontrado...")

        if (attributes.status && leadExists.status === "New" && attributes.status !== "Contacted") {
            throw new HttpError(
                400,
                "Não é possível alterar o status de um lead novo para qualquer outro status diferente de 'Contacted'"
            )
        }

        if (attributes.status && attributes.status === "Archived") {
            const now = new Date()
            const timeDiff = Math.abs(now.getTime() - leadExists.updatedAt.getTime())
            const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))

            if (daysDiff < 180) throw new HttpError(400, "Um lead só pode ser arquivado após 6 meses de inatividade!")
        }
        const updatedLead = await this.leadsRepository.updateById(id, attributes)

        return { updatedLead }
    }

    async deleteLead (id: number) {
        const leadExists = await this.leadsRepository.findById(id)
        if (!leadExists) throw new HttpError(404, "Lead não encontrado...")

        const deletedLead = await this.leadsRepository.deleteById(id)
        return {deletedLead}
    }

}