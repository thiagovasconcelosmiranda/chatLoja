import z from "zod";

export const userSchemas = z.object({
    ip: z.string({message: 'Ip é obrigatório!'}),
    browser: z.string({message: 'Navegador é obrigatório!'}),
    message: z.string({message: 'Menssagem é Obrigatório!'})
});