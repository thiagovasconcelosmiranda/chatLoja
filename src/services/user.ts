import { prisma } from "../utils/prisma";

export const findByUser = async (id: number, ip: string, browser: string) => {
    const user = await prisma.user.findFirst({
        select: {
            id: true,
            ip: true,
            browser: true,
            Conversation: true
        },
        where:{id, ip, browser}
    });
    return user;
}

export const createUser = async (data: any) => {

}