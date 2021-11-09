import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from 'src/users/models';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { config } from 'src/constants';

@Injectable()
export class UserService {
  constructor(
    @Inject(config.database.user_provider)
    private userModel: Model<User>,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(createUserDto);
    console.log('createUser', createUser);
    return createUser.save();
  }
}
