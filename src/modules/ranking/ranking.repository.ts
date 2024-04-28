import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Ranking } from '@entities';
import { Repository } from '../../database/repository';

@Injectable()
export class RankingRepository extends Repository<Ranking> {
  constructor(@InjectModel(Ranking.name) private modelRanking: Model<Ranking>) {
    super(modelRanking);
  }
}
