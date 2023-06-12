import { validateToken } from '../token/validateToken.js'

export function verifyPermissionUpdate(req, res, next) {
  const user = validateToken(req)

  if (user['permissionUpdate'] === true) {
    return next();
  }
  return res.status(404).json("Usário não possui permissão para Atualizar.");
}

export function verifyPermissionDelete(req, res, next) {
  const user = validateToken(req)

  if (user['permissionDelete'] === true) {
    return next();
  }
  return res.status(404).json("Usário não possui permissão para Deletar.");
}