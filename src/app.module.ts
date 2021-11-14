import { Module } from '@nestjs/common';

import { UsersModule } from 'src/users/users.module';
import { EventsModule } from 'src/events/events.module';
import { DatabaseModule } from 'src/common/database.module';

@Module({
  imports: [UsersModule, EventsModule, DatabaseModule],
})
export class AppModule {}
