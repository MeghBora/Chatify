import { IUser } from "../models/UserModel";
import { Request, Response } from "express";


export const registerUser = async (req:Request, res: Response, ) => {
    const {
        username,
        password,
        email
    } = req.body;

    if (!username && !email && !password) {
        return res.status(400).json({message: "Provide Proper Fields"});
    }

    

}