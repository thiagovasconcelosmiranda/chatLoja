import { prisma } from "../utils/prisma";

export const createConversation = async (data: any, userId: number) =>{
  const newConversation = await prisma.conversation.create({
    data:{
      conversation: data.conversation,
      userId
    }
  });
  return newConversation;
}