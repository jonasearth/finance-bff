import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { FinanceController } from './finance.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_CLIENT',
        transport: Transport.TCP,
        options: {
          host: 'auth-core',
          port: 4000,
        },
      },
    ]),
  ],
  controllers: [FinanceController],
})
export class FinanceModule {}
