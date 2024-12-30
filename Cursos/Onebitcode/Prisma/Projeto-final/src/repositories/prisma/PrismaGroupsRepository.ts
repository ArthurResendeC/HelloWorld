import { prisma } from "../../database";
import { CreateGroupAttributes, GroupModel, GroupsRepository } from "../GroupsRepository";

export class PrismaGroupsRepository implements GroupsRepository {
    async find(): Promise<GroupModel[]> {
        return prisma.group.findMany()
    }

    async findById(id: number): Promise<GroupModel | null> {
        return prisma.group.findUnique({ where: { id } })
    }

    async create(attributes: CreateGroupAttributes): Promise<GroupModel> {
        return prisma.group.create({ data: attributes })
    }

    async updateById(id: number, attributes: Partial<CreateGroupAttributes>): Promise<GroupModel> {
        return prisma.group.update({ where: { id }, data: attributes })
    }

    async deleteById(id: number): Promise<GroupModel> {
        return prisma.group.delete({ where: { id } })
    }

    async addLead(groupId: number, leadId: number): Promise<GroupModel> {
        return prisma.group.update({
            where: { id: groupId },
            data: {
                leads: { connect: { id: leadId } },
            },
            include: { leads: true },
        })
    }

    async removeLead(groupId: number, leadId: number): Promise<GroupModel> {
        return prisma.group.update({
            where: { id: groupId },
            data: {
                leads: { disconnect: { id: leadId } }
            },
            include: { leads: true }
        })
    }

}