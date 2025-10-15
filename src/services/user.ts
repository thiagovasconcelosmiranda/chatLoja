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

export const findByUserBrowserIp = async (data: any) => {
   const user = await prisma.user.findFirst({
    where: {browser: data.browser, ip: data.ip}
   });
   return user;
}

export const findByUserAdm = async (adm: boolean) => {
  const user = await prisma.user.findFirst({where: {adm}});
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
