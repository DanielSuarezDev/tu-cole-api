import {
  IsUrl,
  IsEmail,
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User Id of provider, like firebase',
  })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    example: 'Daniel',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Suarez',
  })
  @IsString()
  lastName?: string;

  @ApiProperty({
    example: 'micorreo@mail.com',
    required: false,
  })
  @IsEmail()
  email?: string;

  @ApiProperty()
  @IsOptional()
  phone?: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  // @ApiProperty({
  //   required: false,
  // })
  // role?: Roles;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  deviceToken?: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
  validated: boolean;
}

export class ReadUserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  name: string;

  @ApiProperty({
    required: false,
  })
  lastName?: string;

  @ApiProperty({
    required: false,
  })
  email?: string;

  @ApiProperty()
  phone?: string;

  @ApiProperty({
    required: false,
  })
  imageUrl?: string;

  // @ApiProperty({
  //   required: false,
  // })
  // role?: Roles;

  @ApiProperty()
  createdAt?: Date;

  @ApiProperty()
  updatedAt?: Date;

  @ApiProperty()
  deletedAt?: Date;
}
