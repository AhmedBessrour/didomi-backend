import { Module } from '@nestjs/common';

import { UsersModule } from 'src/users/users.module';
import { EventsModule } from 'src/events/events.module';
import { DatabaseModule } from 'src/common/database.module';
import { LoggerModule } from 'src/common/services/logger/logger.module';

@Module({
  imports: [UsersModule, EventsModule, DatabaseModule, LoggerModule],
})
export class AppModule {}
