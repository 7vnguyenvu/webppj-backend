import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BlogContent, BlogOwner } from 'src/modules/schemas/schema';

/*
	. Mã người like
	. Mã được like
 */

@Schema({ timestamps: true })
export class Like {
  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true })
  ref_id: string;
}

export const LikeSchema = SchemaFactory.createForClass(Like);
