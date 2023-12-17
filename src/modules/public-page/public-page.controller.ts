import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PublicPageService } from './public-page.service';
import { PublicPage } from './schemas/public-page.schema';

@Controller('api/pages')
export class PublicPageController {
  constructor(private blogService: PublicPageService) {}

  @Get()
  async find(): Promise<PublicPage[]> {
    return await this.blogService.find();
  }

  @Get(':id')
  async user(@Param('id') blog_id: string): Promise<PublicPage> {
    return await this.blogService.findBy('blog_id', blog_id);
  }

  @Post('new')
  async create(@Body() blog: PublicPage): Promise<PublicPage> {
    return await this.blogService.create(blog);
  }

  @Put('update/:id')
  async update(@Param('id') user_id: string): Promise<PublicPage> {
    return await this.blogService.findBy('user_id', user_id); // ...
  }
}
