import { Handler } from "express";
import { CampaignRequestSchema, UpdateCampaignRequestSchema } from "./schemas/campaignRequestSchema";
import { HttpError } from "../errors/HttpError";
import { CampaignsRepository } from "../repositories/CampaignsRepository";

export class CampaignsController {
    constructor(
        private readonly campaignsRepository: CampaignsRepository
    ) { }

    index: Handler = async (req, res, next) => {
        try {
            const campaigns = await this.campaignsRepository.findMany()
            res.json(campaigns)
        } catch (error) {
            next(error)
        }
    }

    create: Handler = async (req, res, next) => {
        try {
            const body = CampaignRequestSchema.parse(req.body)
            const newCampaign = await this.campaignsRepository.create(body)
            res.status(201).json(newCampaign)
        } catch (error) {
            next(error)
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const campaign = await this.campaignsRepository.findById(id)
            if (!campaign) throw new HttpError(404, "Campanha não encontrada...")

            res.json(campaign)
        } catch (error) {
            next(error)
        }
    }

    update: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const body = UpdateCampaignRequestSchema.parse(req.body)
            const updatedCampaign = await this.campaignsRepository.updateById(id, body)
            if (!updatedCampaign) throw new HttpError(404, "Campanha não encontrada...")

            res.json(updatedCampaign)
        } catch (error) {
            next(error)
        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const deletedcampaign = await this.campaignsRepository.deleteById(id)
            if (!deletedcampaign) throw new HttpError(404, "Campanha não encontrada...")
            res.json(deletedcampaign)
        } catch (error) {
            next(error)
        }
    }
}