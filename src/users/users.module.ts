import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserController } from 'src/users/user.controller';
import { UserService } from 'src/users/user.service';
import { DatabaseModule } from 'src/common/database.module';
import { User } from 'src/users/models/user.model';

@Module({
  imports: [DatabaseModule, SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UsersModule {}
