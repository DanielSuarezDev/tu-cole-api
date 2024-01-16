import { Injectable, NotFoundException } from '@nestjs/common';
import { ParentRepository } from './parent.repository';
import { Parent, Student } from '@entities';
import { _FilterQuery } from 'mongoose';
import { CreateParentDto } from '@contracts';
import { StudentRepository } from '../student/student.repository';

@Injectable()
export class ParentService {
  constructor(
    private repository: ParentRepository,
    private studentModel: StudentRepository,
  ) {}

  findAll(f?: _FilterQuery<Parent>): Promise<Parent[]> {
    return this.repository.findAll(f);
  }

  findOne(f?: _FilterQuery<Parent>): Promise<Parent> {
    return this.repository.findOne(f);
  }

  findByPk(id: string): Promise<Parent> {
    return this.repository.findById(id);
  }

  create(user: CreateParentDto): Promise<Parent> {
    return this.repository.create(user);
  }

  async parentStudentToParent(
    parentId: string,
    studentCode: string,
  ): Promise<Student> {
    console.log(
      `Vinculando estudiante con código: ${studentCode} al padre con ID: ${parentId}`,
    );

    const student = await this.studentModel.findOne({ code: studentCode });
    if (!student) {
      console.log('Estudiante no encontrado con ese código.');
      throw new NotFoundException('Estudiante no encontrado.');
    }

    // Verifica si el padre ya está vinculado
    if (!student.parents.includes(parentId)) {
      student.parents.push(parentId);
      await student.save(); // Asegúrate de esperar a que la promesa se resuelva
      console.log(
        `Padre con ID: ${parentId} vinculado al estudiante con código: ${studentCode}`,
      );
    } else {
      console.log(
        `Padre con ID: ${parentId} ya estaba vinculado al estudiante.`,
      );
    }

    return student;
  }
}
