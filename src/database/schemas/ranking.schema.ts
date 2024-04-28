import { v4 as uuid } from 'uuid';
import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument, Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RankingDocument = HydratedDocument<Ranking>;

@Schema()
class History {
  @Prop({ required: true })
  score: number;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  title: string;
}

const HistorySchema = SchemaFactory.createForClass(History);

class UserInformation {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  course: string;
}

@Schema({ timestamps: true })
export class Ranking extends Document {
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

  @ApiProperty()
  @IsUUID('4')
  @Prop({ name: 'user_id', index: true })
  userId: string;

  @ApiProperty()
  @Prop()
  score: number;

  @ApiProperty({ type: UserInformation })
  @Prop({
    type: {
      name: { type: String, required: true },
      image: { type: String, required: true },
      course: { type: String, required: true },
    },
    _id: false, // Esto es para asegurar que no se genere un _id para este objeto incrustado
  })
  userInfo: UserInformation;

  @ApiProperty({ type: [HistorySchema] }) // Documenta el subesquema para Swagger
  @Prop({ type: [HistorySchema], default: [] }) // Define el historial como un array de subdocumentos
  history: Types.DocumentArray<History>;
}

export const RankingSchema = SchemaFactory.createForClass(Ranking);
