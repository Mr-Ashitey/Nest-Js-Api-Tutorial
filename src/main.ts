import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // to remove any body inputs from the request which is not specified in the dto
    }),
  ); // to handle body validations from request
  await app.listen(3000);
}
bootstrap();
