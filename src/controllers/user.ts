import { Request, Response } from "express";
import { createUser, createUserRelation, findByUserAdm, findByUserBrowserIp, findByUserId } from "../services/user";
import { userSchemas } from "../schemas/user";
import { createConversation } from "../services/convertion";

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await findByUserId(parseInt(id));
    res.json({ user });
}

export const addUser = async (req: Request, res: Response) => {
    const safeData = userSchemas.safeParse(req.body);

    if (!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
        return;
    }


    const userAdm: any = await findByUserAdm(true);

    if (!userAdm) {
        res.status(404).json({ error: 'usuario administrador Offline!' });
        return;
    }


    const user: any = await findByUserBrowserIp(safeData.data);

    if (!user) {
        const newUser: any = await createUser(safeData.data);
        if (!newUser) {
            res.status(404).json({ error: 'Usuário não adicionada!' });
            return;
        }

        const newUserRelation: any = await createUserRelation(parseInt(userAdm.id), parseInt(newUser.id));
        if (!newUserRelation) {
            res.status(404).json({ error: 'Relacionamento não adicionada!' });
            return;
        }

        const conversation = await createConversation(safeData.data.message, parseInt(newUser.id));
        if (!conversation) {
            res.status(404).json({ error: 'Conversa não adicionada!' });
            return;
        }
    }

    const conversation = await createConversation(safeData.data.message, parseInt(user.id));
    if (!conversation) {
        res.status(404).json({ error: 'Conversa não adicionada!' });
        return;
    }

    res.json({ conversation });

}