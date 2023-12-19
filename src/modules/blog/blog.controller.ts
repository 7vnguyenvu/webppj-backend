import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './schemas/blog.schema';

@Controller('api/blogs')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get()
  async find(): Promise<Blog[]> {
    return await this.blogService.find();
  }

  @Get(':id')
  async user(@Param('id') blog_id: string): Promise<Blog> {
    return await this.blogService.findBy('blog_id', blog_id);
  }

  @Get('user/:userpage')
  async userblogs(@Param('userpage') userpage: string): Promise<Blog[]> {
    return await this.blogService.findUserBlogs(userpage);
  }

  @Post('new')
  async create(@Body() blog: Blog): Promise<Blog> {
    return await this.blogService.create(blog);
  }

  @Put('update/:id')
  async update(@Param('id') user_id: string): Promise<Blog> {
    return await this.blogService.findBy('user_id', user_id); // ...
  }
}
