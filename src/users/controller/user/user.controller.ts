import { Controller, Body, Get, Post, Delete, HttpCode } from '@nestjs/common';
import { CreateUserDto, DeleteUserDto } from "src/users/dto/user.dto";
import { UserService } from 'src/users/services/user.service';
import { User } from 'src/users/models';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}
  @Get()
  getUser(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Delete()
  deleteUser(@Body() deleteUserDto: DeleteUserDto): void {
    return this.usersService.deleteUser(deleteUserDto);
  }
}
