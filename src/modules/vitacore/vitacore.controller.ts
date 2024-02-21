import { CreateVitacoreDto } from '@Common/contracts/vitacore.dto';
import { Vitacore } from '@entities';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { VitacoreService } from './vitacore.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('vitacore')
@Controller('vitacore')
export class VitacoreController {
  constructor(private service: VitacoreService) {}

  @Get('by-user')
  async getVitacoreByUser(): Promise<Vitacore[]> {
    return this.service.findAll();
  }

  @Get('')
  async getVitacore(): Promise<Vitacore[]> {
    return this.service.findAll();
  }

  @Post('')
  async createVitacore(@Body() data: CreateVitacoreDto): Promise<Vitacore> {
    return this.service.createVitacore(data);
  }
}
