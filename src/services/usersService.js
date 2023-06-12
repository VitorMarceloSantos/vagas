import { postNewUserModel } from '../models/newUser.js'
import { deleteUserModel } from '../models/deleteUser.js'
import { indexUserName, indexUserId } from '../utils/positionUser.js'
import { updateUserModel } from '../models/updateUser.js'
import { searchUserModel } from '../models/searchUser.js';
import { addViewUser } from '../utils/addViewUser.js'
import { searchUsersModel } from '../models/searchUsers.js'

export async function getUserNameService(name) {
  const index = indexUserName(name);

  if (index != -1) {
    addViewUser(index);
    return { status: 200, message: searchUserModel(index) }
  }
  return { status: 404, message: 'Usuário não encontrado.' };
}

export async function getUsersService() {
  try {
    return searchUsersModel();
  } catch (error) {
    return {
      status: 400, message: 'Bad Request.'
    }
  }
}

export async function postNewUserService(informations) {
  const { name } = informations;
  if (indexUserName(name) != -1) {
    return {
      status: 404, message: 'Usuário já se encontra cadastrado.'
    }
  }
  return postNewUserModel(informations)
}

export async function deleteUserService(name) {
  try {
    const index = indexUserName(name);
    if (index == -1) {
      return {
        status: 404, message: 'Usuário não encontrado.'
      }
    }
    return deleteUserModel(index)

  } catch (error) {
    return {
      status: 400, message: 'Bad Request.'
    }
  }
}

export async function updateUserService(id, informations) {
  try {
    const index = indexUserId(id);
    if (index == -1) {
      return {
        status: 404, message: 'Usuário não encontrado.'
      }
    }
    return updateUserModel(index, informations)

  } catch (error) {
    return {
      status: 400, message: 'Bad Request.'
    }
  }
}