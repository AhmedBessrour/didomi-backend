import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/sequelize';

import { User } from 'src/users/models/user.model';
import { CreateUserDto, DeleteUserDto } from 'src/users/dto/user.dto';
import { Event } from '../events/models';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async insertOne(createUserDto: CreateUserDto): Promise<User> {
    try {
      const uID = uuidv4();
      return await this.userModel.create({
        id: uID,
        userID: uID,
        email: createUserDto.email,
      });
    } catch (e) {
      throw new HttpException(
        'Existing or missing parameters',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.userModel.findAll();
    } catch (e) {
      throw new HttpException('Cannot query users', HttpStatus.NOT_FOUND);
    }
  }

  async findOne(id: string): Promise<User> {
    try {
      return await this.userModel.findOne({
        where: {
          id,
        },
        include: [Event],
      });
    } catch (e) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
  }

  async updateOne(userID: string, eventID: string): Promise<User> {
    try {
      const user = await this.findOne(userID);
      return await user.update(
        {
          consents: eventID,
        },
        {
          where: {
            id: userID,
          },
        },
      );
    } catch (e) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
  }

  async remove({ id }: DeleteUserDto): Promise<void> {
    try {
      const user = await this.findOne(id);
      await user.destroy();
    } catch (e) {
      throw new HttpException('Could not remove user', HttpStatus.NOT_FOUND);
    }
  }
}
