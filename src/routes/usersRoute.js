import { Router } from "express";
import { getUsers, postNewUser, deleteUser, updateUser } from '../controllers/usersController.js'
import { validateName } from '../middlewares/verifyName.js'
import { verifyInformations } from '../middlewares/verifyInformations.js'
import { verifyPermissionUpdate, verifyPermissionDelete } from '../middlewares/verifyPermissions.js'

const routers = Router();

routers.get('/', getUsers)
routers.post('/', verifyInformations, postNewUser)
routers.delete('/', validateName, verifyPermissionDelete, deleteUser)
routers.put('/', verifyInformations, verifyPermissionUpdate, updateUser)

export default routers;