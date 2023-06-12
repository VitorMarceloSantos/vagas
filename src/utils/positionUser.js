import fakeData from "../models/fakeData.js";

export function indexUserName(name) {
  return fakeData.findIndex(user => {
    return user.name == name
  });
}

export function indexUserId(id) {
  return fakeData.findIndex(user => {
    return user.id == id
  });
}