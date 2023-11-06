import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import configuration from './modules/config/configuration';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { VitacoreModule } from './modules/vitacore/vitacore.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
