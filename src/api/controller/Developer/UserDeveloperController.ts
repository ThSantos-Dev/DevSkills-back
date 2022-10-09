import DeveloperService from "../../../services/developer/DeveloperService"
import { Request, Response } from "express";
import RegisterDeveloperData from "../../../interfaces/RegisterDeveloper";
 
export default class UserDeveloperController {
   static async create(req: Request, res: Response) {
 
       let user : RegisterDeveloperData = req.body
 
       const answer = await DeveloperService.create(user)

       res.status(answer.statusCode).json(answer.error ? {error: answer.error} : {message: answer.message})

   }

   static async auth(req: Request, res: Response) {

    const { login, senha } = req.body

    const answer = await DeveloperService.auth(login, senha)

    res.status(answer.statusCode).json(answer.error ? {error: answer.error} : {message: answer.message, type: answer.userType, token: answer.token})

   }

   static async forgotPass(req: Request, res: Response) {
    
   }
}
