import { Handler } from "express";
import { CreateLeadRequestsSchema, GetLeadsRequestSchema, UpdateLeadRequestsSchema } from "./schemas/leadsRequestsSchema";
import { LeadsService } from "../services/leadsService";
export class LeadsController {
    constructor(private readonly leadsService: LeadsService) { }

    index: Handler = async (req, res, next) => {
        try {
            const query = GetLeadsRequestSchema.parse(req.query)
            const { page = "1", pageSize = "10"} = query

            const result = await this.leadsService.getAllLeadsPaginated({
                ...query,
                page: +page,
                pageSize: +pageSize,
            })

            res.json(result)
        } catch (error) {
            next(error)
        }
    }

    create: Handler = async (req, res, next) => {
        try {
            const body = CreateLeadRequestsSchema.parse(req.body)
            const newLead = await this.leadsService.createLead(body)

            res.status(201).json(newLead)
        } catch (error) {
            next(error)
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const lead = await this.leadsService.findLeadById(id)
            res.json(lead)
        } catch (error) {
            next(error)
        }
    }

    update: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const body = UpdateLeadRequestsSchema.parse(req.body)

            const updatedLead = await this.leadsService.updateLead(id, body)
            res.json(updatedLead)
        } catch (error) {
            next(error)
        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const deletedLead = await this.leadsService.deleteLead(id)

            res.json(deletedLead)
        } catch (error) {
            next(error)
        }
    }
}