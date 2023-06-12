import { searchUserModel } from '../models/searchUser.js'
import { indexUserName } from '../utils/positionUser.js'
import { generateToken } from '../token/generateToken.js'

const searchUserName = (name) => {
  const index = indexUserName(name);

  if (index != -1) {
    return searchUserModel(index);
  }
  return { status: 404, message: 'Usuário não encontrado.' };
}

// Efetuar o login para verificar se o usuario poderá deletar/atualizar cadastros
export function loginUser(req, res) {
  try {
    const name = req.body.name;
    const resultSearch = searchUserName(name);
    const token = generateToken(resultSearch);
    return res.status(200).json({ message: "Login Efetuado com sucesso.", token });

  } catch (error) {
    return res.status(400).json("Bad Request.");
  }
}