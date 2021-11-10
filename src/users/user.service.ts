import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { User } from 'src/users/models';
import { CreateUserDto, DeleteUserDto } from 'src/users/dto/user.dto';
import { config } from 'src/constants';

@Injectable()
export class UserService {
  constructor(
    @Inject(config.database.user_provider)
    private userModel: Model<User>,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel({ id: uuidv4(), ...createUserDto });
    return createUser.save();
  }

  getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  deleteUser(deleteUserDto: DeleteUserDto): void {
    this.userModel.findOneAndDelete(deleteUserDto, (err) => {
      if (err) {
        throw new HttpException('Delete User failed', HttpStatus.NO_CONTENT);
      }
    });
  }
}
