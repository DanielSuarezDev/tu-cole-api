import { v4 as uuid } from 'uuid';
import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SubjectDocument = HydratedDocument<Subject>;

@Schema({ timestamps: true })
export class Subject extends Document {
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
  @Prop({ name: 'id_teacher', required: false })
  idTeacher?: string;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
