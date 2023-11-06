import { Module, forwardRef } from '@nestjs/common';

import { AppModule } from 'src/app.module';

import { MongooseModule } from '@nestjs/mongoose';

import { Vitacore, VitacoreSchema } from '@entities';
import { VitacoreController } from './vitacore.controller';
import { VitacoreService } from './vitacore.service';
import { VitacoreRepository } from './vitacore.repository';
@Module({
  imports: [
    forwardRef(() => AppModule),
    MongooseModule.forFeature([
      { name: Vitacore.name, schema: VitacoreSchema },
    ]),
  ],
  controllers: [VitacoreController],
  providers: [VitacoreService, VitacoreRepository],
})
export class VitacoreModule {}
