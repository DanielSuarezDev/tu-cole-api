import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Vitacore } from '@entities';
import { Repository } from '../../database/repository';

@Injectable()
export class VitacoreRepository extends Repository<Vitacore> {
  constructor(
    @InjectModel(Vitacore.name) private modelVitacore: Model<Vitacore>,
  ) {
    super(modelVitacore);
  }
}
