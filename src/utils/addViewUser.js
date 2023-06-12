import fakeData from "../models/fakeData.js";

export function addViewUser(index) {
  try {
    // Vericando se a key count está adicionado ao usuário, caso não esteja será adicionada com o valor 1
    if ('viewsCounter' in fakeData[index]) {
      fakeData[index].viewsCounter += 1;
    }
    else {
      fakeData[index].viewsCounter = 1;
    }
  } catch (error) {
    return {
      status: 400, message: 'Bad Request.'
    }
  }

}