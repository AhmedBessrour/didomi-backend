import { Module } from '@nestjs/common';
import { EventController } from './controller/event/event.controller';
import { EventService } from './services/event/event.service';

@Module({
  controllers: [EventController],
  providers: [EventService],
})
export class EventsModule {}
