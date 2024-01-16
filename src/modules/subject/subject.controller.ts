import { Body, Controller, Param, Post, Put, UseGuards } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/firebase.guard';
import {
  CreateSubjectDto,
  ReadSubjectDto,
  UpdateSubjectDto,
} from '@Common/contracts/subject.dto';
import { v4 as uuidv4 } from 'uuid';

@Controller('subject')
export class SubjectController {
  constructor(private serviceCourse: SubjectService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() data: CreateSubjectDto): Promise<ReadSubjectDto> {
    const dataSubject = {
      ...data,
      id: uuidv4(),
    };
    return this.serviceCourse.create(dataSubject);
  }

  @Put('/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() data: UpdateSubjectDto,
  ): Promise<ReadSubjectDto> {
    return this.serviceCourse.update(id, data);
  }
}
