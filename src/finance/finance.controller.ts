import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('finance')
@UseGuards(AuthGuard)
export class FinanceController {}
