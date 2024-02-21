import { Injectable } from '@nestjs/common';
import { CourseRepository } from './course.repository';
import { _FilterQuery } from 'mongoose';
import { Course } from 'src/database/schemas';
import {
  CreateCourseDto,
  ReadCourseDto,
  UpdateCourseDto,
} from '@Common/contracts/course.dto';

@Injectable()
export class CourseService {
  constructor(private repository: CourseRepository) {}

  findAll(f?: _FilterQuery<Course>): Promise<Course[]> {
    return this.repository.findAll(f);
  }

  findOne(f?: _FilterQuery<Course>): Promise<Course> {
    return this.repository.findOne(f);
  }

  findByPk(id: string): Promise<Course> {
    return this.repository.findById(id);
  }

  create(user: CreateCourseDto): Promise<Course> {
    return this.repository.create(user);
  }

  async addStudentToCourse(courseId: string, studentId: string): Promise<void> {
    const course = await this.repository.findById(courseId);
    if (course) {
      // Suponiendo que `students` es un array de ID de estudiantes en tu modelo de curso
      // Verifica primero si el estudiante ya está asignado al curso
      if (!course.students.includes(studentId)) {
        course.students.push(studentId);
        await this.repository.update(courseId, { students: course.students });
      }
    }
    // Considera manejar el caso donde el curso no se encuentre
  }

  async update(id: string, user: UpdateCourseDto): Promise<ReadCourseDto> {
    await this.repository.update(id, user);
    return this.findByPk(id);
  }
}
