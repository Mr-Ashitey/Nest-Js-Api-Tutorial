import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  // private authService: AuthService - creates an instance of the AuthService class
  constructor(private authService: AuthService) {}
}
