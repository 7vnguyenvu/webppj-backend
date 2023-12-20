import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { BlogService } from './blog.service';
import { Blog } from './schemas/blog.schema';
import { storageConfig } from 'helpers/config';

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

  @Post('upload-file')
  @UseInterceptors(
    FileInterceptor('file', { storage: storageConfig('images/blogs') }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return JSON.stringify(file.destination + '/' + file.filename);
  }

  @Post('upload-files')
  @UseInterceptors(
    FilesInterceptor('files', 50, { storage: storageConfig('images/blogs') }),
  )
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    return JSON.stringify(files);
  }

  @Put('update/:id')
  async update(@Param('id') user_id: string): Promise<Blog> {
    return await this.blogService.findBy('user_id', user_id);
  }
}
