import { Controller, Get, Param } from '@nestjs/common';
import { LayoutService } from './layout.service';
import { LayoutPage } from './schemas/layout.schema';

@Controller('layouts')
export class LayoutController {
  constructor(private layoutService: LayoutService) {}

  @Get()
  async find(): Promise<LayoutPage[]> {
    return await this.layoutService.find();
  }

  @Get(':id')
  async user(@Param('id') blog_id: string): Promise<LayoutPage> {
    return await this.layoutService.findBy('blog_id', blog_id);
  }
}
