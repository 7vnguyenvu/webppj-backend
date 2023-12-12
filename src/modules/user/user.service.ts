import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './schemas/user.schema';
import { UserNone } from '../schemas/schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModle: mongoose.Model<User>,
  ) {}

  async find(): Promise<User[]> {
    return await this.userModle.find();
  }

  async findBy(field: string, value: any): Promise<User> {
    return await this.userModle.findOne({ [field]: value }).exec();
  }

  async create(user: UserNone): Promise<User> {
    const ucreate = new User();
    ucreate.user_id = new Date().toISOString().replace(/\D/g, '');
    const result = await this.userModle.create(ucreate);
    result.info.last_name = user.last_name;
    result.info.nick_name =
      '@user' + new Date().toISOString().replace(/\D/g, '');

    return await this.userModle.findByIdAndUpdate(result._id, result, {
      new: true,
    });
  }
}
