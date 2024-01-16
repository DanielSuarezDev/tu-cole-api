import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ParentDocument = HydratedDocument<Parent>;

@Schema({ timestamps: true })
export class Parent extends Document {
  @ApiProperty()
  @Prop({
    studentCode: '123456',
  })
  studentCode: string;
}

export const ParentSchema = SchemaFactory.createForClass(Parent);
