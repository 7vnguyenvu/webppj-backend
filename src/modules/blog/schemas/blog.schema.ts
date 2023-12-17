import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BlogContent } from 'src/modules/schemas/schema';

/*
	. _id
	. Mã bài viết
	. Mã tác giả
	. Nội dung
		. Ảnh thu nhỏ -> thumbnail/typical image
		. Tiêu đề
		. Nội dung (CKEDITER)
	. Đã ẩn (true/false)
	. Đã xoá (true/false)
	. Ghim lên đầu / Nổi bật
	. Lượt xem
	. Lượt comment
	. Lượt share
	. Lượt đánh giá
 */

@Schema({ timestamps: true })
export class Blog {
  @Prop({ required: true })
  blog_id: string;

  @Prop({ required: true })
  owner_id: string;

  @Prop({ required: true })
  content: BlogContent;

  @Prop({ default: false })
  hidden: boolean;

  @Prop({ default: false })
  locked: boolean;

  @Prop({ default: false })
  pin: boolean;

  @Prop({ default: 0 })
  view: number;

  @Prop({ default: 0 })
  like: number;

  @Prop({ default: 0 })
  comment: number;

  @Prop({ default: 0 })
  share: number;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
