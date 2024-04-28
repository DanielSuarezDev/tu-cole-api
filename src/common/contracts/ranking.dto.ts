import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class UserInformationDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  image: string;

  @ApiProperty()
  @IsString()
  course: string;
}

export class CreateRankingDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  score: number;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  // @IsNotEmpty()
  historyEntry: {
    score: number;
    date: Date;
    title: string;
  };

  @ApiProperty({ type: UserInformationDto })
  @ValidateNested()
  @Type(() => UserInformationDto)
  userInfo: UserInformationDto;
}

export class UpdatePqrDto extends PartialType(CreateRankingDto) {}

export class ReadPqrDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  score: number;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  history: {
    score: number;
    date: Date;
    title: string;
  }[];

  @ApiProperty()
  userInfo = {
    name: 'string',
    image: 'string',
    course: 'string',
  };
}
