import { Controller, Body, Get, Post, Delete } from '@nestjs/common';
import { CreateUserDto, DeleteUserDto } from 'src/users/dto/user.dto';
import { UserService } from 'src/users/user.service';
import { User } from 'src/users/models/user.model';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}
  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.insertOne(createUserDto);
  }

  @Delete()
  deleteUser(@Body() deleteUserDto: DeleteUserDto): Promise<void> {
    return this.usersService.remove(deleteUserDto);
  }
}
