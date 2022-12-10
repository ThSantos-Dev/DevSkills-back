import { Router } from "express";

import GrupoController from "../../src/api/controller/Group/GroupController"

const router = Router()

router.post('/createGroup', GrupoController.groupController)
router.post('/respostaUsuarioConvite', GrupoController.resposta)
router.get('/groupsCompany/:id', GrupoController.getCompanyGroups)
router.get('/groupsUsers/:id', GrupoController.getUsersGroups)
router.get('/conviteUsers/:id', GrupoController.getConviteStatus)
router.get('/notification/:id', GrupoController.getConvite)
router.get('/convitePendente/:id', GrupoController.getConvite)





export default router
