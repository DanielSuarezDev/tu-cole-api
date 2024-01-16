import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

import { FirebaseAuthStrategy } from './strategies/firebase.auth';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([]),
    PassportModule.register({ defaultStrategy: ['firebase-jwt', 'jwt'] }),
  ],
  providers: [FirebaseAuthStrategy, JwtStrategy],
  exports: [PassportModule],
})
export class AuthModule {}
