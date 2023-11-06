import { CreateVitacoreDto } from '@Common/contracts/vitacore.dto';
import { Vitacore } from '@entities';
import { Injectable } from '@nestjs/common';
import { VitacoreRepository } from './vitacore.repository';

@Injectable()
export class VitacoreService {
  constructor(private repository: VitacoreRepository) {}

  async createVitacore(data: CreateVitacoreDto): Promise<Vitacore> {
    return this.repository.create({
      ...data,
    });
  }
}
