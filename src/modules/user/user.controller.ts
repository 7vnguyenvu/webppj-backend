import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { query } from 'express';

@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async find(): Promise<User[]> {
    return await this.userService.find();
  }

  @Get(':id')
  async userById(@Param('id') user_id: string): Promise<User> {
    return await this.userService.findBy('user_id', user_id);
  }

  @Get('user/:nickname')
  async userByNickName(@Param('nickname') nickname: string): Promise<User> {
    return await this.userService.findByNickname(nickname);
  }

  @Post('viewer')
  async viewer(@Query('list') list: string) {
    return await this.userService.findViewer(list.split(','));
  }

  @Post('new')
  async create(@Body() user): Promise<User> {
    return await this.userService.create(user);
  }

  @Put('update/:id')
  async update(@Param('id') user_id: string): Promise<User> {
    return await this.userService.findBy('user_id', user_id); // ...
  }
}
