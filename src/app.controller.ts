import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AppService, HealthBody } from './app.service';
import { JwtAuthGuard } from './modules/auth/guards/firebase.guard';
import { UserService } from './modules/user/user.service';

@ApiTags('health')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @ApiResponse({
    status: 200,
    description: 'Health Check',
    type: HealthBody,
  })
  @Get()
  getHello(): HealthBody {
    return this.appService.getHello();
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('/profile')
  async getProfile(@Request() req) {
    return await this.userService.getUserProfile(req.user);
  }
}
