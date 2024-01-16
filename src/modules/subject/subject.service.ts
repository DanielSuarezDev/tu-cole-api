import { Injectable } from '@nestjs/common';
import { SubjectRepository } from './subject.repository';
import { Subject } from '@entities';
import {
  CreateSubjectDto,
  ReadSubjectDto,
  UpdateSubjectDto,
} from '@Common/contracts/subject.dto';
import { _FilterQuery } from 'mongoose';

@Injectable()
export class SubjectService {
  constructor(private repository: SubjectRepository) {}

  findAll(f?: _FilterQuery<Subject>): Promise<Subject[]> {
    return this.repository.findAll(f);
  }

  findOne(f?: _FilterQuery<Subject>): Promise<Subject> {
    return this.repository.findOne(f);
  }

  findByPk(id: string): Promise<Subject> {
    return this.repository.findById(id);
  }

  create(user: CreateSubjectDto): Promise<Subject> {
    return this.repository.create(user);
  }

  async update(id: string, user: UpdateSubjectDto): Promise<ReadSubjectDto> {
    await this.repository.update(id, user);
    return this.findByPk(id);
  }
}
