import { Controller, Get, Post, Delete } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getUser(): string {
    return 'This action returns all users';
  }

  @Post()
  addUser(): string {
    return 'This action will get a user';
  }

  @Delete()
  deleteUser(): string {
    return 'This action will delete a user';
  }
}
