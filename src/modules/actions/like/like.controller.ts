import { Controller, Get, Param, Post } from '@nestjs/common';
import { LikeService } from './like.service';
import { BlogService } from 'src/modules/blog/blog.service';
import { Blog } from 'src/modules/blog/schemas/blog.schema';

@Controller('api/likes')
export class LikeController {
  constructor(
    private LikeService: LikeService,
    private blogService: BlogService,
  ) {}

  @Get('blog/:rid')
  async count(@Param('rid') ref_id: string): Promise<number> {
    return await this.LikeService.count(ref_id);
  }

  @Get('isuser/:uid')
  async isuserlike(@Param('uid') uid: string): Promise<boolean> {
    return !!(await this.LikeService.find(uid));
  }

  @Post('blog/:uid/:rid')
  async like(
    @Param('uid') user_id: string,
    @Param('rid') ref_id: string,
  ): Promise<number> {
    if (await this.LikeService.find(user_id)) {
      await this.LikeService.decrease(user_id);
    } else {
      await this.LikeService.increase({
        user_id: user_id,
        ref_id: ref_id,
      });
    }

    const currentLikes = await this.LikeService.count(ref_id);
    await this.blogService.like(currentLikes, ref_id);

    // Trả về sô lượt like
    return (await this.blogService.findBy('blog_id', ref_id)).like;
  }
}
