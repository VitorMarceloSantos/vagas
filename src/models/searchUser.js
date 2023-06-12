import fakeData from "./fakeData.js";

export function searchUserModel(index) {
  try {
    return fakeData[index];
  }
  catch (error) {
    return {
      status: 400, message: 'Bad Request.'
    }
  }
}