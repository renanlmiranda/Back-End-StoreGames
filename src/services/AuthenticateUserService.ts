import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../config/auth';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect email or password combination!');
    }

    const pwdValidation = await compare(password, user.password);

    if (!pwdValidation) {
      throw new Error('Incorrect email or password combination!');
    }

    delete user.password;

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: user._id,
      expiresIn,
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
