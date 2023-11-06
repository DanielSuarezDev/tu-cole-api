import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class HealthBody {
  @ApiProperty()
  message: string;

  @ApiProperty()
  datetime: Date;

  @ApiProperty()
  version: string;

  @ApiProperty()
  environment: string;
}

@Injectable()
export class AppService {
  getHello(): HealthBody {
    return {
      message: 'Health check success Test',
      datetime: new Date(),
      version: process.env.VERSION,
      environment: process.env.NODE_ENV,
    };
  }
}
