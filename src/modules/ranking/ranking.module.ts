import { Module, forwardRef } from '@nestjs/common';
import { RankingController } from './ranking.controller';
import { RankingService } from './ranking.service';
import { AppModule } from 'src/app.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Ranking, RankingSchema } from '@entities';
import { RankingRepository } from './ranking.repository';
import { StudentModule } from '../student/student.module';
import { CourseModule } from '../course/course.module';

@Module({
  imports: [
    forwardRef(() => AppModule),
    MongooseModule.forFeature([{ name: Ranking.name, schema: RankingSchema }]),
    StudentModule,
    CourseModule,
  ],
  controllers: [RankingController],
  providers: [RankingService, RankingRepository],
})
export class RankingModule {}
