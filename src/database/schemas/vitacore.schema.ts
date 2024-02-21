import { v4 as uuid } from 'uuid';
import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { VitacoreEnum } from '@Common/types/vitacore.types';

export type VitacoreDocument = HydratedDocument<Vitacore>;

@Schema({ timestamps: true })
export class Vitacore extends Document {
  @ApiProperty()
  @IsUUID('4')
  @Prop({
    name: 'id',
    unique: true,
    index: true,
    default: uuid(),
  })
  id: string;

  @ApiProperty()
  @Prop()
  title: string;

  @Prop()
  @ApiProperty()
  text: string;

  @Prop({ name: 'image_url' })
  @ApiProperty()
  imageUrl?: string;

  @ApiProperty()
  @Prop({ name: 'status' })
  status: boolean;

  @ApiProperty()
  @Prop({ name: 'vitacore_type', enum: VitacoreEnum, index: true })
  type: VitacoreEnum;

  @ApiProperty()
  @IsUUID('4')
  @Prop({ name: 'user_id', index: true })
  userId: string[];

  // @ApiProperty()
  // @IsUUID('4')
  // @Prop({ name: 'account_id', index: true })
  // accountId: string;

  @ApiProperty()
  @Prop({ name: 'radicate' })
  radicate?: string;

  @ApiProperty()
  @Prop({ name: 'teacher' })
  teacher: string;
}

export const VitacoreSchema = SchemaFactory.createForClass(Vitacore);
