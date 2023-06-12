import jwt from 'jsonwebtoken';
import { secret } from './jwtConfig.js';

export function validateToken(req, res) {
  // Enviado pelo header do thunderClient : authorization - token
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    // Fazendo a decodificação 
    const decoded = jwt.verify(token, secret); // vai receber as informações do usuario(name, id, email)
    return decoded;
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}