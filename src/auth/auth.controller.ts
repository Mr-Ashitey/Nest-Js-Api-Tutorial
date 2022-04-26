import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // to set the route
export class AuthController {
  // private authService: AuthService - creates an instance of the AuthService class
  constructor(private authService: AuthService) {}
  @Post('signin')
  signIn() {
    return 'I am signed in';
  }

  @Post('signup')
  signUp() {
    return 'I am signed up';
  }
}
