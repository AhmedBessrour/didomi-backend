import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserController } from 'src/users/user.controller';
import { UserService } from 'src/users/user.service';
import { DatabaseModule } from 'src/common/database.module';
import { usersProviders } from 'src/users/providers/users.providers';
import { User } from 'src/common/models/user.model';

@Module({
  imports: [DatabaseModule, SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, ...usersProviders],
})
export class UsersModule {}
