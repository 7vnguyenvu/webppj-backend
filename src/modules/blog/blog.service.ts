import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Blog } from './schemas/blog.schema';
import { UserService } from '../user/user.service';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name) private blogModel: mongoose.Model<Blog>,
    private userService: UserService,
  ) {}

  async find(): Promise<Blog[]> {
    const blogs = await this.blogModel.find();
    return blogs.slice().sort(() => Math.random() - 0.5);
  }

  async findBy(field: string, value: any): Promise<Blog> {
    return await this.blogModel.findOne({ [field]: value }).exec();
  }

  async findUserBlogs(userpage: any): Promise<Blog[]> {
    return await this.blogModel.find({ 'owner.page_url': userpage }).exec();
  }

  async create(blog: Blog): Promise<Blog> {
    blog.blog_id = new Date().toISOString().replace(/\D/g, '');
    return await this.blogModel.create(blog);
  }

  async like(newLikeCount: number, blogId: string): Promise<number> {
    try {
      // Tìm bài đăng dựa trên blogId
      const blog = await this.blogModel.findOne({ blog_id: blogId });

      if (!blog) {
        return null;
      }

      // Cập nhật số lượng like
      blog.like = newLikeCount;

      // Lưu thông tin bài đăng với số lượng like mới vào database
      const updatedBlog = await blog.save();

      return updatedBlog.like;
    } catch (error) {
      console.error('Error updating likes for blog:', error);
      throw error;
    }
  }
}
