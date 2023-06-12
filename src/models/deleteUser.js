import fakeData from "./fakeData.js";

export function deleteUserModel(index) {
  try {
    fakeData.splice(index, 1);
    return { status: 200, message: "Usuário deletado com Sucesso." };
  }
  catch (error) {
    return {
      status: 400, message: 'Bad Request.'
    }
  }
}
