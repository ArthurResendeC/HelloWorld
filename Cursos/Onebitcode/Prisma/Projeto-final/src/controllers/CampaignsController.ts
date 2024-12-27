import { Handler } from "express";
import { prisma } from "../database";
import { CampaignRequestSchema, UpdateCampaignRequestSchema } from "./schemas/campaignRequestSchema";
import { HttpError } from "../errors/HttpError";

export class CampaignsController {
    index: Handler = async (req, res, next) => {
        try {
            const campaigns = await prisma.campaign.findMany()
            res.json(campaigns)
        } catch (error) {
            next(error)
        }
    }

    create: Handler = async (req, res, next) => {
        try {
            const body = CampaignRequestSchema.parse(req.body)
            const newCampaign = await prisma.campaign.create({
                data: body
            })
            res.status(201).json(newCampaign)
        } catch (error) {
            next(error)
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const campaign = await prisma.campaign.findUnique({
                where: { id },
                include: {
                    leads: {
                        include: {
                            lead: true
                        }
                    }
                }
            })

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

            const campaignExists = await prisma.campaign.findUnique({ where: { id } })
            if (!campaignExists) throw new HttpError(404, "Campanha não encontrada...")

            const updatedCampaign = await prisma.campaign.update({ where: { id }, data: body })
            res.json(updatedCampaign)
        } catch (error) {
            next(error)
        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const campaignExists = await prisma.campaign.findUnique({ where: { id } })
            if (!campaignExists) throw new HttpError(404, "Campanha não encontrada...")

            const deletedcampaign = await prisma.campaign.delete({ where: { id } })
            res.json(deletedcampaign)

        } catch (error) {
            next(error)
        }
    }





}