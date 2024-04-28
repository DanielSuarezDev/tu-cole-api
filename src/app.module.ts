import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import configuration from './modules/config/configuration';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { VitacoreModule } from './modules/vitacore/vitacore.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CourseModule } from './modules/course/course.module';
import { SubjectModule } from './modules/subject/subject.module';
import { StudentModule } from './modules/student/student.module';
import { ParentModule } from './modules/parent/parent.module';
import { RankingModule } from './modules/ranking/ranking.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('database.mongoUrl'),
      }),
    }),
    VitacoreModule,
    UserModule,
    AuthModule,
    CourseModule,
    SubjectModule,
    StudentModule,
    ParentModule,
    RankingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
