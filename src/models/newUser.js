import fakeData from "./fakeData.js";

export function postNewUserModel(informations) {
  const { name, job } = informations;
  // Irá receber o ultimo id cadastrado, para não haver conflito em caso de deletar e inserir novos usuários
  const idLastUser = (fakeData[fakeData.length - 1]).id + 1;
  // Cria as permissões: deletar e atualizar
  const permissionsList = ['permissionDelete', 'permissionUpdate'];
  const permissionsObject = {};
  // Caso o usuario ao criar não passe as permissões como parâmetro, será atribuido false como default
  permissionsList.forEach((permission) => {
    if (permission in informations === false) {
      permissionsObject[permission] = false;
    } else {
      permissionsObject[permission] = true;
    }
  })

  fakeData.push({
    id: idLastUser, name, job, ...permissionsObject
  })
  return { status: 201, message: fakeData[fakeData.length - 1] };
}
