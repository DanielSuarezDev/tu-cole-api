import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateSubjectDto {
  @ApiProperty({
    example: 'Matemáticas',
    description: 'Nombre de la materia',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Descripción de la materia',
    required: false,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    example: 'ID_Profesor',
    description: 'Identificador del profesor asignado a la materia',
    required: false,
  })
  @IsString()
  idTeacher?: string;
}

export class UpdateSubjectDto extends PartialType(CreateSubjectDto) {}

export class ReadSubjectDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  idTeacher?: string;

  @ApiProperty()
  createdAt?: Date;

  @ApiProperty()
  updatedAt?: Date;

  @ApiProperty()
  deletedAt?: Date;
}
