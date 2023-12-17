import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DefaultLayoutThumbnailImage } from 'src/modules/schemas/default';
import { LayoutItem, Image } from 'src/modules/schemas/schema';

/*
	. _id
	. Mã chủ đề
	. Tên bố cục
	. Ảnh mô tả bố cục
		. filename
		. url
	. items (list)
		. type: (Background, CoverImage, Avatar,...)
		. colConfig
			. breakpoint (xs, sm, md, lg, ...)
				. span (wide)
				. offset
				. ...
		. styles
			. Css ...
 */

@Schema({ timestamps: true })
export class LayoutPage {
  @Prop({ required: true })
  layout_id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ default: DefaultLayoutThumbnailImage })
  thumbnail: Image;

  @Prop({ default: [] })
  items: LayoutItem[];
}

export const LayoutPageSchema = SchemaFactory.createForClass(LayoutPage);
