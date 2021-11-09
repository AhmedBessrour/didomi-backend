import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { UserService } from './services/user.service';
import { DatabaseModule } from 'src/common/database.module';
import { usersProviders } from './providers/users.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...usersProviders],
})
export class UsersModule {}
