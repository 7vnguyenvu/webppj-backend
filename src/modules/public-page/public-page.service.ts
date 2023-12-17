import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { PublicPage } from './schemas/public-page.schema';

@Injectable()
export class PublicPageService {
  constructor(
    @InjectModel(PublicPage.name) private blogModle: mongoose.Model<PublicPage>,
  ) {}

  async find(): Promise<PublicPage[]> {
    const blogs = await this.blogModle.find();
    return blogs.slice().sort(() => Math.random() - 0.5);
  }

  async findBy(field: string, value: any): Promise<PublicPage> {
    return await this.blogModle.findOne({ [field]: value }).exec();
  }

  async create(blog: PublicPage): Promise<PublicPage> {
    blog.blog_id = new Date().toISOString().replace(/\D/g, '');
    return await this.blogModle.create(blog);
  }
}
