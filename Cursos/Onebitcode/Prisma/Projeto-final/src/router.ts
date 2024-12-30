import { Router } from "express";
import {leadsController, campaignLeadsController, campaignsController, groupLeadsController, groupsController} from "./container"

const router = Router()

router.get("/leads", leadsController.index)
router.post("/leads", leadsController.create)
router.get("/leads/:id", leadsController.show)
router.put("/leads/:id", leadsController.update)
router.delete("/leads/:id", leadsController.delete)

router.get("/groups", groupsController.index)
router.post("/groups", groupsController.create)
router.get("/groups/:id", groupsController.show)
router.put("/groups/:id", groupsController.update)
router.delete("/groups/:id", groupsController.delete)

router.get("/campaigns", campaignsController.index)
router.post("/campaigns", campaignsController.create)
router.get("/campaigns/:id", campaignsController.show)
router.put("/campaigns/:id", campaignsController.update)
router.delete("/campaigns/:id", campaignsController.delete)

router.get("/campaigns/:campaignId/leads", campaignLeadsController.getLeads)
router.post("/campaigns/:campaignId/leads/:leadId", campaignLeadsController.addLead)
router.put("/campaigns/:campaignId/leads/:leadId", campaignLeadsController.updateleadStatus)
router.delete("/campaigns/:campaignId/leads/:leadId", campaignLeadsController.removeLead)

router.get("/groups/:groupId/leads", groupLeadsController.index)
router.post("/groups/:groupId/leads/:leadId", groupLeadsController.addLead)
router.delete("/groups/:groupId/leads/:leadId", groupLeadsController.deleteLead)

router.get("/status", async (req, res, next) => {
    try {
        res.json({ message: "OK" })
    } catch (error) {
        next(error)
    }
})

export { router }