import { prisma } from "../utils/prisma";

export const createConversation = async (message: string, userId: number) =>{
  const newConversation = await prisma.conversation.create({
    data:{
      message,
      userId
    }
  });
  return newConversation;
}