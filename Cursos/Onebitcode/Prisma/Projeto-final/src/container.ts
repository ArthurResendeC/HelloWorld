import { LeadsController, GroupsController, CampaignsController, CampaignLeadsController, GroupLeadsController } from "./controllers"
import { PrismaGroupsRepository } from "./repositories/prisma/PrismaGroupsRepository"
import { PrismaLeadsRepository } from "./repositories/prisma/PrismaLeadsRepository"
import { PrismaCampaignsRepository } from "./repositories/prisma/PrismaCampaignsRepository"
import { LeadsService } from "./services/leadsService"

const LeadsRepository = new PrismaLeadsRepository()
const groupsRepository = new PrismaGroupsRepository()
const campaignsRepository = new PrismaCampaignsRepository()

const leadsService = new LeadsService(LeadsRepository)

const leadsController = new LeadsController(leadsService)
const groupsController = new GroupsController(groupsRepository)
const groupLeadsController = new GroupLeadsController(groupsRepository, LeadsRepository)
const campaignsController = new CampaignsController(campaignsRepository)
const campaignLeadsController = new CampaignLeadsController(campaignsRepository, LeadsRepository)

export { leadsController, groupsController, campaignLeadsController, campaignsController, groupLeadsController }