import { v4 as uuid } from 'uuid';
import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema({ timestamps: true })
export class Student extends Document {
  @ApiProperty()
  @IsUUID('4')
  @Prop({
    name: 'id',
    unique: true,
    index: true,
    default: uuid(),
  })
  id: string;

  @Prop()
  @ApiProperty()
  firstName: string;

  @Prop()
  @ApiProperty()
  lastName: string;

  @Prop()
  @ApiProperty()
  parents: string[];

  @Prop()
  @ApiProperty()
  dateOfBirth: string;

  @Prop()
  @ApiProperty()
  email: string;

  @Prop()
  @ApiProperty()
  course: string;

  @Prop()
  @ApiProperty()
  rh: string;

  @Prop()
  @ApiProperty()
  eps: string;

  @Prop()
  @ApiProperty()
  address: string;

  @Prop()
  @ApiProperty()
  neighborhood: string;

  @Prop()
  @ApiProperty()
  father: string;

  @Prop()
  @ApiProperty()
  mother: string;

  @Prop()
  @ApiProperty()
  fatherPhone: string;

  @Prop()
  @ApiProperty()
  motherPhone: string;

  @Prop()
  @ApiProperty()
  medicines: string[];

  @Prop()
  @ApiProperty()
  code: string;

  @Prop()
  @ApiProperty()
  createdAt?: Date;

  @Prop()
  @ApiProperty()
  updatedAt?: Date;

  @Prop()
  @ApiProperty()
  deletedAt?: Date;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
