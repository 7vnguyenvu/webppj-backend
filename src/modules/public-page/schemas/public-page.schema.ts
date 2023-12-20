import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  DefaultImage,
  DefaultPageInfoContent,
  DefaultPublicPageInfo,
} from 'src/modules/schemas/default';
import {
  Image,
  PublicPageShow,
  PublicPageInfo,
  PageInfoContent,
} from 'src/modules/schemas/schema';

/*
	. _id
	. Mã trang đại chúng
	. Mã người dùng
	. Phong cách (chủ đề)
	. Bố cục (loại 1,2,3,... custom)
	. Ảnh mô tả trang
		. filename
		. url
	. Hiển thị
		. Ảnh bìa người dùng
			. Hình ảnh
				. filename
				. url
			. Trang thái (Ẩn/hiện)
			. Kích thước ảnh
		. Ảnh nền
		. Ảnh đại diện
		. Tên
		. Slogan thể hiện phong cách
		. Bài viết của tôi
		. Hoạt động gần đây
		. Kết nối
	. Lượt xem
	. Lượt comment
	. Lượt share
	. Lượt đánh giá
 */

@Schema({ timestamps: true })
export class PublicPage {
  @Prop({ required: true })
  page_id: string;

  @Prop({ required: true })
  owner_id: string;

  @Prop({ required: true })
  layout_id: string;

  @Prop({ default: DefaultImage })
  thumbnail: Image;

  @Prop({ default: {} })
  show: PublicPageShow;

  @Prop({ default: DefaultPublicPageInfo })
  pageinfo: PublicPageInfo;

  @Prop({ default: DefaultPageInfoContent })
  pageinfocontent: PageInfoContent;
}

export const PublicPageSchema = SchemaFactory.createForClass(PublicPage);
