import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCourseDto {
  @ApiProperty({
    example: 'English',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Descripcion del curso',
  })
  @IsString()
  description?: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  idTeacher?: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  color?: string;

  @ApiProperty()
  students?: string[];

  @ApiProperty()
  subjects?: string[];
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  validated: boolean;
}

export class ReadCourseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  idTeacher?: string;

  @ApiProperty()
  students?: string[];

  @ApiProperty()
  color?: string;

  @ApiProperty()
  subjects?: string[];

  @ApiProperty()
  createdAt?: Date;

  @ApiProperty()
  updatedAt?: Date;

  @ApiProperty()
  deletedAt?: Date;
}
