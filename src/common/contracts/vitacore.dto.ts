import { IsNotEmpty, IsOptional, IsUrl } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

import {
  VitacoreEnum,
  vitacoreClasificationEnum,
} from '../types/vitacore.types';

export class CreateVitacoreDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  text: string;

  @ApiProperty()
  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @ApiProperty()
  justified: boolean;

  @ApiProperty()
  type: VitacoreEnum;

  @ApiProperty()
  userId: string[];

  @ApiProperty()
  accountId: string;

  @ApiProperty()
  radicate?: string;

  @ApiProperty()
  teacher: string;

  @ApiProperty()
  clasification: vitacoreClasificationEnum;
}

export class UpdatePqrDto extends PartialType(CreateVitacoreDto) {}

export class ReadPqrDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  text: string;

  @ApiProperty()
  imageUrl?: string;

  @ApiProperty()
  justified: boolean;

  @ApiProperty()
  clasification: vitacoreClasificationEnum;

  @ApiProperty()
  type: VitacoreEnum;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  accountId: string;

  @ApiProperty()
  teacher: string;

  @ApiProperty()
  createdAt?: Date;

  @ApiProperty()
  updatedAt?: Date;

  @ApiProperty()
  deletedAt?: Date;

  @ApiProperty()
  userType?: string;

  @ApiProperty()
  user?: {
    name: string;
    email: string;
    phone: string;
    imageUrl: string;
  };

  @ApiProperty()
  radicate?: string;
}
