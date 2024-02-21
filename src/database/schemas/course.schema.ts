import { v4 as uuid } from 'uuid';
import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CourseDocument = HydratedDocument<Course>;

@Schema({ timestamps: true })
export class Course extends Document {
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
  name: string;

  @ApiProperty()
  @Prop()
  description: string;

  @ApiProperty()
  @Prop({ required: false })
  color?: string;

  @ApiProperty()
  @Prop({ name: 'id_teacher', required: false })
  idTeacher?: string;

  @ApiProperty()
  @Prop({ required: false })
  students?: string[];

  @ApiProperty()
  @Prop({ required: false })
  subjects?: string[];
}

export const CourseSchema = SchemaFactory.createForClass(Course);
