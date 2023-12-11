import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { async } from 'rxjs';

@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async find(): Promise<User[]> {
    return await this.userService.find();
  }

  @Post('new')
  async create(@Body() user): Promise<User> {
    return await this.userService.create(user);
  }
}
