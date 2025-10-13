import z from "zod";

export const conversationSchemas = z.object({
    conversation: z.string({message: 'menssage é Obrigatório!'})
})