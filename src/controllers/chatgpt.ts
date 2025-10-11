import { Request, Response } from "express";

export const getChat = async (req: Request, res: Response) => {
   const chatMessage = [{
      perg: 'Olá! Meu nome é Alexa assistente! Como posso ajudar?'
   }];

   res.json({ chatMessage });
}