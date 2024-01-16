import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import {
  CreateUserDto,
  ReadUserDto,
  UpdateUserDto,
} from '../../common/contracts/user.dto';
import { UserService } from './user.service';

import { JwtAuthGuard } from '../auth/guards/firebase.guard';

@ApiTags('user')
@Controller('user')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'List users',
    type: ReadUserDto,
    isArray: true,
  })
  findAll(@Request() req): Promise<ReadUserDto[]> {
    console.log('req -------------', JSON.stringify(req.user));
    return this.service.findAll();
  }

  @Get('/profile')
  @ApiBearerAuth()
  @ApiResponse({
    description: 'The user records',
    type: CreateUserDto,
    isArray: false,
  })
  async getProfile(@Request() req) {
    console.log('CreateUserDto --------------', req.user);
    console.log(req.user);
    return await this.service.getUserProfile(req.user);
  }

  @Get('/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string): Promise<ReadUserDto> {
    return this.service.findByPk(id);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() data: CreateUserDto): Promise<ReadUserDto> {
    return this.service.create(data);
  }

  @Patch('/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
  ): Promise<ReadUserDto> {
    return this.service.update(id, data);
  }
}
