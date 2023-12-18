import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './schemas/blog.schema';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { UserService } from '../user/user.service';
import { UserSchema } from '../user/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Blog', schema: BlogSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [BlogController],
  providers: [BlogService, UserService],
})
export class BlogModule {}
