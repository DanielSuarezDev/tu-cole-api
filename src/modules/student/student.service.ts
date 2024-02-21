import { Injectable } from '@nestjs/common';
import { StudentRepository } from './student.repository';
import { _FilterQuery } from 'mongoose';
import { Student } from '@entities';
import { CreateStudentDto, ReadStudentDto, UpdateStudentDto } from '@contracts';
import { CourseService } from '../course/course.service';

@Injectable()
export class StudentService {
  constructor(
    private repository: StudentRepository,
    private courseService: CourseService,
  ) {}

  findAll(f?: _FilterQuery<Student>): Promise<Student[]> {
    return this.repository.findAll(f);
  }

  findOne(f?: _FilterQuery<Student>): Promise<Student> {
    return this.repository.findOne(f);
  }

  findByPk(id: string): Promise<Student> {
    return this.repository.findById(id);
  }

  // create(user: CreateStudentDto): Promise<Student> {
  //   return this.repository.create(user);
  // }

  async create(data: CreateStudentDto): Promise<Student> {
    // Primero, crea el estudiante
    const student = await this.repository.create(data);

    // Luego, actualiza el curso asignando el ID del nuevo estudiante
    if (data.course) {
      await this.courseService.addStudentToCourse(
        data.course,
        student.id.toString(),
      );
    }

    return student;
  }

  async update(id: string, user: UpdateStudentDto): Promise<ReadStudentDto> {
    await this.repository.update(id, user);
    return this.findByPk(id);
  }

  async findStudentsByParentId(parentId: string): Promise<Student[]> {
    // Esta consulta asume que el campo que vincula a los padres con los estudiantes se llama "parents"
    // y que es un array de IDs de los padres en la colección de estudiantes.
    return this.repository.findAll({ parents: parentId });
  }
}
