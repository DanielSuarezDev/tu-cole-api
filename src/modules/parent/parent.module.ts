import { Module, forwardRef } from '@nestjs/common';
import { ParentController } from './parent.controller';
import { ParentService } from './parent.service';
import { AppModule } from 'src/app.module';
import { ParentRepository } from './parent.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Parent, ParentSchema } from '@entities';
import { StudentModule } from '../student/student.module';

@Module({
  imports: [
    forwardRef(() => AppModule),
    MongooseModule.forFeature([{ name: Parent.name, schema: ParentSchema }]),
    StudentModule,
  ],
  controllers: [ParentController],
  providers: [ParentService, ParentRepository],
  exports: [ParentService, ParentRepository],
})
export class ParentModule {}
