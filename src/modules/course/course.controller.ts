import { Body, Controller, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CourseService } from './course.service';
import {
  CreateCourseDto,
  ReadCourseDto,
  UpdateCourseDto,
} from '@Common/contracts/course.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/firebase.guard';
import { v4 as uuidv4 } from 'uuid';

@Controller('course')
export class CourseController {
  constructor(private serviceCourse: CourseService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() data: CreateCourseDto): Promise<ReadCourseDto> {
    const dataCourse = {
      ...data,
      id: uuidv4(),
    };
    return this.serviceCourse.create(dataCourse);
  }

  @Put('/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() data: UpdateCourseDto,
  ): Promise<ReadCourseDto> {
    return this.serviceCourse.update(id, data);
  }
}
