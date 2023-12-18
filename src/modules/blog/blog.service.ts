import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Blog } from './schemas/blog.schema';
import { User } from '../user/schemas/user.schema';
import { UserService } from '../user/user.service';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name) private blogModle: mongoose.Model<Blog>,
    private userService: UserService,
  ) {}

  async find(): Promise<Blog[]> {
    const blogs = await this.blogModle.find();
    return blogs.slice().sort(() => Math.random() - 0.5);
  }

  async findBy(field: string, value: any): Promise<Blog> {
    return await this.blogModle.findOne({ [field]: value }).exec();
  }

  async create(blog: Blog): Promise<Blog> {
    blog.blog_id = new Date().toISOString().replace(/\D/g, '');
    return await this.blogModle.create(blog);
  }
}
