import fakeData from "./fakeData.js";

export function updateUserModel(index, informations) {
  const idUser = fakeData[index].id;
  const { name, job } = informations;

  fakeData[index].name = name;
  fakeData[index].job = job;
  fakeData[index].id = idUser;
  return { status: 200, message: fakeData[index] };
}

