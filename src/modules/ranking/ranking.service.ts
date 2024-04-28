import { Injectable } from '@nestjs/common';
import { RankingRepository } from './ranking.repository';
import { _FilterQuery } from 'mongoose';
import { Ranking } from '@entities';
import { CreateRankingDto } from '@Common/contracts/ranking.dto';
import { StudentService } from '../student/student.service';
import { CourseService } from '../course/course.service';

@Injectable()
export class RankingService {
  constructor(
    private repository: RankingRepository,
    private userService: StudentService,
    private courseService: CourseService,
  ) {}

  findAll(f?: _FilterQuery<Ranking>): Promise<Ranking[]> {
    return this.repository.findAll(f);
  }

  async createOrUpdateRanking(data: CreateRankingDto): Promise<Ranking> {
    const userInfo = await this.userService.findByPk(data.userId);
    let ranking = await this.repository.findOne({ userId: data.userId });

    //TODO: Más adelante mirar y cuadrar el tema de los cursos
    // const courseInfo = await this.courseService.findByPk(userInfo.course);

    if (ranking) {
      // Actualizar el puntaje acumulado
      ranking.score += data.score;
      // Añadir al historial
      ranking.history.push({
        score: data.score,
        date: new Date(),
        title: data.title,
      });
      await ranking.save();
    } else {
      ranking = await this.repository.create({
        userId: data.userId,
        score: data.score,
        userInfo: {
          name: userInfo.firstName + ' ' + userInfo.lastName,
          image: userInfo.imageUrl,
          course: userInfo.course,
        },
        history: [
          // eslint-disable-next-line prettier/prettier, @typescript-eslint/ban-ts-comment
          //@ts-ignore
          {
            score: data.score,
            date: new Date(),
            title: data.title,
          },
        ],
      });
      await ranking.save();
    }

    return ranking;
  }
}
