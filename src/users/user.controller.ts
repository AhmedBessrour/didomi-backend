import { Controller, Body, Get, Post, Delete, Param } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

import { CreateUserDto, DeleteUserDto } from 'src/users/dto/user.dto';
import { UserService } from 'src/users/user.service';
import { User } from 'src/users/models/user.model';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'List Users' })
  @ApiResponse({ status: 200, description: 'List Users' })
  getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
  })
  @ApiResponse({
    status: 200,
    description: 'Get one user',
    type: User,
  })
  getOneUser(@Param() { id }): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create User' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'Create User.' })
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.insertOne(createUserDto);
  }

  @Delete()
  @ApiOperation({ summary: 'Delete User' })
  @ApiBody({ type: DeleteUserDto })
  @ApiResponse({ status: 200, description: 'Delete User.' })
  deleteUser(@Body() deleteUserDto: DeleteUserDto): Promise<void> {
    return this.usersService.remove(deleteUserDto);
  }
}
