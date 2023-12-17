import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Event } from './schemas/event.schema';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event.name)
    private blogModle: mongoose.Model<Event>,
  ) {}

  async find(): Promise<Event[]> {
    const blogs = await this.blogModle.find();
    return blogs.slice().sort(() => Math.random() - 0.5);
  }

  async findBy(field: string, value: any): Promise<Event> {
    return await this.blogModle.findOne({ [field]: value }).exec();
  }

  async create(blog: Event): Promise<Event> {
    blog.blog_id = new Date().toISOString().replace(/\D/g, '');
    return await this.blogModle.create(blog);
  }
}
