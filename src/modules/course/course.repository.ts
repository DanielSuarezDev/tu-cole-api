import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Repository } from '../../database/repository';
import { Course } from 'src/database/schemas/course.schema';

@Injectable()
export class CourseRepository extends Repository<Course> {
  constructor(
    @InjectModel(Course.name)
    private modelUser: Model<Course>,
  ) {
    super(modelUser);
  }
}
