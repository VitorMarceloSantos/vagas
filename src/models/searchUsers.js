import fakeData from "./fakeData.js";

export function searchUsersModel() {
  try {
    return {
      status: 200, message: fakeData
    };
  }
  catch (error) {
    return {
      status: 400, message: 'Bad Request.'
    }
  }
}