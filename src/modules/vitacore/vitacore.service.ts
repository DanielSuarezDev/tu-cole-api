import { CreateVitacoreDto } from '@Common/contracts/vitacore.dto';
import { Vitacore } from '@entities';
import { Injectable } from '@nestjs/common';
import { VitacoreRepository } from './vitacore.repository';
import { _FilterQuery } from 'mongoose';

@Injectable()
export class VitacoreService {
  constructor(private repository: VitacoreRepository) {}

  findAll(f?: _FilterQuery<Vitacore>): Promise<Vitacore[]> {
    return this.repository.findAll(f);
  }

  async createVitacore(data: CreateVitacoreDto): Promise<Vitacore> {
    return this.repository.create({
      ...data,
    });
  }
}
