import { Module } from '@nestjs/common';
import { UserController } from 'src/users/user.controller';
import { UserService } from 'src/users/user.service';
import { DatabaseModule } from 'src/common/database.module';
import { usersProviders } from 'src/users/providers/users.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...usersProviders],
})
export class UsersModule {}
