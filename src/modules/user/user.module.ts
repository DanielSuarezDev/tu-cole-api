import { MongooseModule } from '@nestjs/mongoose';
import { Module, forwardRef } from '@nestjs/common';

import { AppModule } from 'src/app.module';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { User, UserSchema } from '@entities';
// import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    forwardRef(() => AppModule),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    // PassportModule.register({ defaultStrategy: 'firebase' }),
  ],
  controllers: [UserController],
  providers: [UserRepository, UserService],
  exports: [UserService, UserRepository],
})
export class UserModule {}
