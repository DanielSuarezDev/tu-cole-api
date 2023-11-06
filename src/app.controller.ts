import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { AppService, HealthBody } from './app.service';

@ApiTags('health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({
    status: 200,
    description: 'Health Check',
    type: HealthBody,
  })
  @Get()
  getHello(): HealthBody {
    return this.appService.getHello();
  }
}
