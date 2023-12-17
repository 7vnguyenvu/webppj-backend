import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './schemas/event.schema';

@Controller('api/events')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  async find(): Promise<Event[]> {
    return await this.eventService.find();
  }

  @Get(':id')
  async user(@Param('id') blog_id: string): Promise<Event> {
    return await this.eventService.findBy('blog_id', blog_id);
  }

  @Post('new')
  async create(@Body() blog: Event): Promise<Event> {
    return await this.eventService.create(blog);
  }

  @Put('update/:id')
  async update(@Param('id') user_id: string): Promise<Event> {
    return await this.eventService.findBy('user_id', user_id); // ...
  }
}
