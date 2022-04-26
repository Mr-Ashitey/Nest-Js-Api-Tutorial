import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // sign in method/service
  signIn() {
    return { msg: 'I am signed in' };
  }

  // sign up method/service
  signUp() {
    return { msg: 'I am signed up' };
  }
}
