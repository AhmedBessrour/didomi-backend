import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/sequelize';

import { User } from 'src/users/models/user.model';
import { CreateUserDto, DeleteUserDto } from 'src/users/dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async insertOne(createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.userModel.create({
        id: uuidv4(),
        email: createUserDto.email,
        consents: '',
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
      });
    } catch (e) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
  }

  async updateOne(id: string, target: string): Promise<User> {
    try {
      const user = await this.findOne(id);
      return await user.update(
        {
          consents: target,
        },
        {
          where: {
            id,
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
