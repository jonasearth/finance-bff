import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { winstonConfig } from 'winston.config';
import { WinstonModule } from 'nest-winston';
import { LoggerInterceptor } from './interceptors/logger.interceptor';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { FinanceModule } from './finance/finance.module';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [WinstonModule.forRoot(winstonConfig), FinanceModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
