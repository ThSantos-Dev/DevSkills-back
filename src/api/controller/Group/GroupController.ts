import GroupService from "../../services/Group/GroupService"
import { Request, Response } from "express"
import tokenVerify from "../../../middlewares/auth"
import {Grupos} from "../../interfaces/Groups/groups"
import authGuard from "../../../middlewares/auth"

export default class GroupController {
    static async groupController(req: Request, res: Response){
        const group : Grupos = req.body
        
        const tests = await GroupService.create(group)
       // console.log(tests)
        
        return res.status(201).json({message: "Grupo cadastrado com sucesso!"})
    }
    static async resposta(req: Request, res: Response){
        const { idUsuario, status, idGrupo } = req.body
    //    console.log(req.body)

        const teste = await GroupService.resposta(idUsuario, status,idGrupo)
      //  console.log(idGrupo)
       // console.log(teste, "controller")

        return res.status(201).json({message: "Resposta enviada!"})

    }
    static async getCompanyGroups(req: Request, res: Response) {

        const tokenValidate = await authGuard(req)
        //console.log(req)

        const result = await GroupService.getGroupCompany(tokenValidate)
   
        res.status(200).json({ data: result })

      
    }
    static async getUsersGroups(req: Request, res: Response){
        const { id } = req.params

        const data = await GroupService.getUsersGroups(parseInt(id))

        return res.status(200).json({data: data})
    }
}