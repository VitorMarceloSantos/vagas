import { Router } from "express";
import { getUserName } from '../controllers/usersController.js'
import { validateName } from '../middlewares/verifyName.js'
import { loginUser } from '../middlewares/loginUser.js';

const routers = Router();

routers.get('/', validateName, getUserName)
// Utilizar a rota user/login para verificar a possibilidade de atualizar/deletar cadastros
// A rota login vai gerar um Token(utilizar no Header das rotas put: /users -  delete: /users)
routers.post('/login', loginUser)

export default routers;