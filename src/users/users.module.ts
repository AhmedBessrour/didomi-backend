import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserController } from 'src/users/user.controller';
import { UserService } from 'src/users/user.service';
import { User } from 'src/users/models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [SequelizeModule],
})
export class UsersModule {}
