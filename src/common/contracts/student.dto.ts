import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Length, IsOptional } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: 'https://example.com/image.jpg', required: false })
  @IsString()
  @IsOptional()
  imageUrl?: string;

  @ApiProperty({ example: '2024-01-01', required: false })
  @IsString()
  @IsOptional()
  dateOfBirth: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  email: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  parents: string[];

  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  course: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  rh: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  eps: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  address: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  neighborhood: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  father: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  mother: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  fatherPhone: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  motherPhone: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  medicines: string[];

  @ApiProperty({ example: '123456', required: false })
  @IsString()
  @Length(6, 6)
  @IsOptional()
  code: string;
}

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  validated: boolean;
}

export class ReadStudentDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  parents: string[];

  @ApiProperty()
  dateOfBirth: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  course: string;

  @ApiProperty()
  rh: string;

  @ApiProperty()
  eps: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  neighborhood: string;

  @ApiProperty()
  father: string;

  @ApiProperty()
  mother: string;

  @ApiProperty()
  fatherPhone: string;

  @ApiProperty()
  motherPhone: string;

  @ApiProperty()
  medicines: string[];

  @ApiProperty()
  code: string;

  @ApiProperty()
  createdAt?: Date;

  @ApiProperty()
  updatedAt?: Date;

  @ApiProperty()
  deletedAt?: Date;
}
