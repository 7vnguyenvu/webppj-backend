import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DefaultUserImage, DefaultUserInfo } from 'src/modules/schemas/default';
import { UserInfo, UserImage } from 'src/modules/schemas/schema';

/*
	. Mã người dùng
	. Thông tin
		. Họ
		. Tên
		. Tên đầy đủ
		. Biệt danh
		. Bio
		. Mô tả
		. Ngày sinh
		. Liên hệ
			. Số điện thoại
			. Email
			. Trang mạng (list)
				. Tên trang mạng
				. Tên hiển thị
				. HyperLink
	. Hình ảnh
		. Ảnh đại diện (list)
			. filename
			. url
		. Ảnh nền (list)
			. filename
			. url
	. Màu chủ đề
	. Lượt theo dõi
	. Lượt truy cập (như lượt xem, số lượng khách ghé thăm)
	. Người xem gần đây (list mã người xem)
 */

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  user_id: string;

  @Prop({ default: DefaultUserInfo })
  info: UserInfo;

  @Prop({ default: DefaultUserImage })
  images: UserImage;

  @Prop({ default: '#0a9d00' })
  theme_color: string;

  @Prop({ default: 0 })
  like: number;

  @Prop({ default: 0 })
  view: number;

  @Prop({ default: [] })
  viewer: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
