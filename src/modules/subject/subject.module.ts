import { Module, forwardRef } from '@nestjs/common';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppModule } from 'src/app.module';
import { Subject, SubjectSchema } from '@entities';
import { SubjectRepository } from './subject.repository';

@Module({
  imports: [
    forwardRef(() => AppModule),
    MongooseModule.forFeature([{ name: Subject.name, schema: SubjectSchema }]),
  ],
  controllers: [SubjectController],
  providers: [SubjectService, SubjectRepository],
  exports: [SubjectService, SubjectRepository],
})
export class SubjectModule {}
