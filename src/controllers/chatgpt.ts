import { Request, Response } from "express";
import { findByUserBrowserIp, findByUserId } from "../services/user";

export const getChat = async (req: Request, res: Response) => {
   const chatMessage = [{
      perg: 'Olá! Meu nome é Alexa assistente! Como posso ajudar?'
   }];

   res.json({ chatMessage });
}

export const getChatUser = async (req: Request, res: Response) => {
   const {user1, user2, browser, ip} = req.params;
   const array = [user1, user2];
   const users = [];

   for(let index in array){
      const user = await findByUserBrowserIp(parseInt(array[index]), browser, ip);
      users.push(user);
   }


   res.json({users});
}