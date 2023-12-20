import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LikeSchema } from './schemas/like.schema';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { BlogService } from 'src/modules/blog/blog.service';
import { BlogSchema } from 'src/modules/blog/schemas/blog.schema';
import { UserSchema } from 'src/modules/user/schemas/user.schema';
import { UserService } from 'src/modules/user/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Like', schema: LikeSchema },
      { name: 'Blog', schema: BlogSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [LikeController],
  providers: [LikeService, BlogService, UserService],
})
export class LikeModule {}
