import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Like } from './schemas/like.schema';

@Injectable()
export class LikeService {
  constructor(
    @InjectModel(Like.name) private LikeModle: mongoose.Model<Like>,
  ) {}

  async count(ref_id: string): Promise<number> {
    const Likes = await this.LikeModle.find({ ref_id: ref_id });
    return Likes.length;
  }

  async find(user_id: string): Promise<Like> {
    return await this.LikeModle.findOne({ user_id: user_id }).exec();
  }

  async increase(like: Like) {
    await this.LikeModle.create(like);
  }

  async decrease(user_id: string) {
    await this.LikeModle.findOneAndDelete({ user_id: user_id });
  }
}
