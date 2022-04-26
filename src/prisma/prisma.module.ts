import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // <-- this decorator is required to inject the service into other modules
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // export the service so that it can be used by other modules
})
export class PrismaModule {}
