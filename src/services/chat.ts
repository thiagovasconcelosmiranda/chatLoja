import { prisma } from "../utils/prisma";

export const findByUserChat = async (user2: number) => {
     const relation = await prisma.userRelation.findMany({
         where:{user2}
     })
   return relation;
}