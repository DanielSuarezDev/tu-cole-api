import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateParentDto {
  @ApiProperty({
    example: '123456',
  })
  @IsString()
  @IsNotEmpty()
  studentCode: string;
}

export class UpdateParentDto extends PartialType(CreateParentDto) {
  validated: boolean;
}

export class ReadParentDto {
  @ApiProperty()
  studentCode: string;
}
