import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

/*
	. Tên đăng nhập
	. Mật khẩu
	. Mật khẩu cũ
	. Mã người dùng (Tạo user trước)
	. Cấp quyền
	. Đã khoá (true/false)
 */

@Schema({ timestamps: true })
export class Account {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: '' })
  old_password: string;

  @Prop({ required: true })
  user_id: string;

  @Prop({ default: 0 })
  role: number;

  @Prop({ default: false })
  locked: boolean;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
