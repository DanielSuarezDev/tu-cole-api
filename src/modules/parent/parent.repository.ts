import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Repository } from '../../database/repository';

import { Parent } from '@entities';

@Injectable()
export class ParentRepository extends Repository<Parent> {
  constructor(
    @InjectModel(Parent.name)
    private parent: Model<Parent>,
  ) {
    super(parent);
  }
}
