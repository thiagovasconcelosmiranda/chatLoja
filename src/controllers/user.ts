import { Request, Response } from "express";
import { createConversation, createUser, createUserRelation, findByUserId } from "../services/user";
import { userSchemas } from "../schemas/user";

export const getUser = async (req: Request, res: Response) => {
    const { id} = req.params;
    const user = await findByUserId(parseInt(id));
    res.json({ user });
}
export const addUser = async (req: Request, res: Response) => {
    const safeData = userSchemas.safeParse(req.body);

    if (!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
        return;
    }

    const newUser: any = await createUser(safeData.data);
    if (!newUser) {
        res.status(404).json({ error: 'Usuário não criado!' });
        return;
    }

    const newUserRelation: any = await createUserRelation(1, parseInt(newUser.id));
    if (!newUserRelation) {
        res.status(404).json({ error: 'Relacionamento não criado!' });
        return;
    }

    res.json({ user: newUser, relation: newUserRelation });

}