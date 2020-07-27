import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}
export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  // JWT validation
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT token is missing');
  }

  // Remove Bearer from token
  const [, token] = authHeader.split(' ');
  const { secret } = authConfig.jwt;

  try {
    const tokenValidation = verify(token, secret);
    const { sub } = tokenValidation as TokenPayload;

    request.user = {
      _id: sub,
    };

    return next();
  } catch {
    throw new Error('Invalid JWT token!');
  }
}
