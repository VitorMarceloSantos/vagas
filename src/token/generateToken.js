import jwt from 'jsonwebtoken';
import { config, secret } from './jwtConfig.js';

export function generateToken(user) {
  try {
    const token = jwt.sign(user, secret, config);
    return token ;
  } catch (error) {
    return res.status(400).json({ message: 'Bad Request' });
  }
}