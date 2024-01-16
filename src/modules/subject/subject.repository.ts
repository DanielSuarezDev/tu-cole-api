import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Repository } from '../../database/repository';

import { Subject } from '@entities';

@Injectable()
export class SubjectRepository extends Repository<Subject> {
  constructor(
    @InjectModel(Subject.name)
    private subject: Model<Subject>,
  ) {
    super(subject);
  }
}
