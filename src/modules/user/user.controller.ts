import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';

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

  @Post('new')
  async create(@Body() user): Promise<User> {
    return await this.userService.create(user);
  }

  @Put('update/:id')
  async update(@Param('id') user_id: string): Promise<User> {
    return await this.userService.findBy('user_id', user_id); // ...
  }
}
