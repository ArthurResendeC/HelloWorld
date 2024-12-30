export type GroupModel = {
    name: string;
    id: number;
    description: string;
}

export interface CreateGroupAttributes {
    name: string,
    description: string
}

export interface GroupsRepository {
    find: () => Promise<GroupModel[]>
    findById: (id: number) => Promise<GroupModel | null>
    create: (attributes: CreateGroupAttributes) => Promise<GroupModel>
    updateById: (id: number, attributes: Partial<CreateGroupAttributes>) => Promise<GroupModel>
    deleteById: (id: number) => Promise<GroupModel>
    addLead: (groupId: number, leadId: number) => Promise<GroupModel>
    removeLead: (groupId: number, leadId: number) => Promise<GroupModel>
}