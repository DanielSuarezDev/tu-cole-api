import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/firebase.guard';
import { CreateStudentDto, ReadStudentDto, UpdateStudentDto } from '@contracts';
import { v4 as uuidv4 } from 'uuid';
import { StudentService } from './student.service';
import { Roles } from '../auth/role.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';

// function generateUniqueCode(length = 6) {
//   const characters =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = '';
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result.toUpperCase();
// }

@Controller('student')
export class StudentController {
  constructor(private serviceStudent: StudentService) {}

  @Get('/by-parent')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  getStudentsByParent(
    @Request() req,
    // @Param('parentId') parentId: string,
  ): Promise<ReadStudentDto[]> {
    console.log('====', req);
    return this.serviceStudent.findStudentsByParentId(req.user.user_id);
  }

  @Get('/all-if-teacher')
  @ApiBearerAuth()
  @Roles('teacher')
  @UseGuards(JwtAuthGuard, RolesGuard)
  getAllStudentsIfTeacher(): Promise<ReadStudentDto[]> {
    return this.serviceStudent.findAll();
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() data: CreateStudentDto): Promise<ReadStudentDto> {
    // const uniqueCode = generateUniqueCode();
    const dataStudent = {
      ...data,
      id: uuidv4(),
      // code: uniqueCode,
    };
    return this.serviceStudent.create(dataStudent);
  }

  @Put('/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() data: UpdateStudentDto,
  ): Promise<ReadStudentDto> {
    return this.serviceStudent.update(id, data);
  }
}
