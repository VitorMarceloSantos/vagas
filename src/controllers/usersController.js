import {
  getUserNameService,
  postNewUserService,
  deleteUserService,
  updateUserService,
  getUsersService,
} from '../services/usersService.js'
export async function getUserName(req, res) {
  const name = req.query.name;

  const { status, message } = await getUserNameService(name);

  return status === 404
    ? res.status(status).json(message)
    : res.status(status).json({ text: `Usuário ${message.name} foi lido ${message.viewsCounter} vezes.`, message });
}

export async function getUsers(_req, res) {
  const { status, message } = await getUsersService();

  res.status(status).json(message);
}

export async function postNewUser(req, res) {
  const informations = req.body

  const { status, message } = await postNewUserService(informations);
  res.status(status).json(message);
}

export async function deleteUser(req, res) {
  const name = req.query.name;

  const { status, message } = await deleteUserService(name);
  res.status(status).json(message);
}

export async function updateUser(req, res) {
  const id = req.query.id;
  const informations = req.body

  const { status, message } = await updateUserService(id, informations);
  res.status(status).json(message);
}