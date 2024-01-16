import { v4 as uuid } from 'uuid';
import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User extends Document {
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
  userId: string;

  @Prop()
  @ApiProperty()
  name: string;

  @ApiProperty()
  @Prop({ name: 'last_name', required: false })
  lastName?: string;

  @ApiProperty()
  @Prop()
  email?: string;

  @ApiProperty()
  @Prop({ required: false })
  phone?: string;

  @ApiProperty()
  @Prop({ name: 'image_url', required: false })
  imageUrl?: string;

  @ApiProperty()
  @Prop({ required: false })
  role?: string;

  @ApiProperty()
  @Prop({ name: 'device_token', required: false })
  deviceToken?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
