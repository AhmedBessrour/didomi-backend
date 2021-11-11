import { Module } from '@nestjs/common';

import { AppService } from 'src/app.service';
import { UsersModule } from 'src/users/users.module';
import { EventsModule } from 'src/events/events.module';

@Module({
  imports: [UsersModule, EventsModule],
  providers: [AppService],
})
export class AppModule {}
