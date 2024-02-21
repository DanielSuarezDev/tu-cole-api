import { Module, forwardRef } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { AppModule } from 'src/app.module';
import { Student, StudentSchema } from '@entities';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentRepository } from './student.repository';
import { UserModule } from '../user/user.module';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CourseModule } from '../course/course.module';

@Module({
  imports: [
    forwardRef(() => AppModule),
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    UserModule,
    CourseModule,
  ],
  controllers: [StudentController],
  providers: [StudentService, StudentRepository, RolesGuard],
  exports: [StudentService, StudentRepository],
})
export class StudentModule {}
