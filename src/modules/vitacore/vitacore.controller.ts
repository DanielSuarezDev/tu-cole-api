import { CreateVitacoreDto } from '@Common/contracts/vitacore.dto';
import { Vitacore } from '@entities';
import { Body, Controller, Post } from '@nestjs/common';
import { VitacoreService } from './vitacore.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('vitacore')
@Controller('vitacore')
export class VitacoreController {
  constructor(private service: VitacoreService) {}

  @Post('')
  async createVitacore(@Body() data: CreateVitacoreDto): Promise<Vitacore> {
    return this.service.createVitacore(data);
  }
}
