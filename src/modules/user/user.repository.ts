import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from '../../database/schemas';
import { Repository } from '../../database/repository';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(
    @InjectModel(User.name)
    private modelUser: Model<User>,
  ) {
    super(modelUser);
  }
}
