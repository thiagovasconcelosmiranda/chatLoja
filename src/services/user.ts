import { prisma } from "../utils/prisma";

export const findByUserId = async (id: number) => {
    const user = await prisma.user.findFirst({
        select: {
            id: true,
            ip: true,
            browser: true,
            Conversation: true
        },
        where: { id }
    });
    return user;
}

export const findByUserBrowserIp = async (id: number, browser: string, ip: string) => {
    const user = await prisma.user.findFirst({
        select: {
            id: true,
            ip: true,
            browser: true,
            Conversation: true
        },
        where: { id, browser, ip }
    });
    return user;
}

export const createUser = async (data: any) => {
    const newUser = await prisma.user.create({
        data: {
            browser: data.browser,
            ip: data.ip,
            adm: false
        }
    });

    return newUser;
}
export const createUserRelation = async (user1: number, user2: number) => {
    const newRelation = await prisma.userRelation.create({
        data: {
            user1,
            user2
        }
    });
    return newRelation;
}

export const createConversation = async (conversation: any, userId: number) => {
    const newConversation = await prisma.conversation.create({
        data: {
            conversation,
            userId
        }
    });
    return newConversation;
}