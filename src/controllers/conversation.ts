import { Request, Response } from "express";
import { conversationSchemas } from "../schemas/convertion";
import { findByUserId } from "../services/user";

export const addConversation = async (req: Request, res: Response) => {
    const id: any = req.params.id;
    const safeData = conversationSchemas.safeParse(req.body);

    if (!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
        return;
    }
    
    const user = await findByUserId(parseInt(id));
    if(!user){
      res.status(404).json({error: 'Usuário não Encontrado!'});
      return;
    }
    
    res.json({user});

}