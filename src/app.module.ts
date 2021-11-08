import { Module } from '@nestjs/common';

import { databaseProviders } from 'src/common/providers/database.providers';

import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { UsersModule } from 'src/users/users.module';
import { EventsModule } from 'src/events/events.module';

@Module({
  imports: [UsersModule, EventsModule],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule {}
