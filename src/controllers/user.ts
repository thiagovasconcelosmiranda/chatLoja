import { Request, Response } from "express";
import { findByUser } from "../services/user";

export const getUser = async (req: Request, res: Response) => {
    const { id, ip, browser } = req.params;
    const user = await findByUser(parseInt(id), ip, browser);
    res.json({ user });
}
export const addUser = async (req: Request, res: Response) => {
   
}