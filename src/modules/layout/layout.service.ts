import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { LayoutPage } from './schemas/layout.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LayoutService {
  constructor(
    @InjectModel(LayoutPage.name)
    private layoutModle: mongoose.Model<LayoutPage>,
  ) {}

  async find(): Promise<LayoutPage[]> {
    return await this.layoutModle.find();
  }

  async findBy(field: string, value: any): Promise<LayoutPage> {
    return await this.layoutModle.findOne({ [field]: value }).exec();
  }

  async create(layout: LayoutPage): Promise<LayoutPage> {
    layout.layout_id = new Date().toISOString().replace(/\D/g, '');
    return await this.layoutModle.create(layout);
  }
}
