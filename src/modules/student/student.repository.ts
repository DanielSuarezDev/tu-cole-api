import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Repository } from '../../database/repository';

import { Student } from '@entities';

@Injectable()
export class StudentRepository extends Repository<Student> {
  constructor(
    @InjectModel(Student.name)
    private student: Model<Student>,
  ) {
    super(student);
  }
}
