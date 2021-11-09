import { Controller, Body, Get, Post, Delete } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { UserService } from 'src/users/services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}
  @Get()
  getUser(): string {
    return 'This action returns all users';
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto', createUserDto);
    return this.usersService.createUser(createUserDto);
  }

  @Delete()
  deleteUser(): string {
    return 'This action will delete a user';
  }
}
