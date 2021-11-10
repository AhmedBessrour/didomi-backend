import { Module } from '@nestjs/common';
import { EventController } from 'src/events/controller/event.controller';
import { EventService } from 'src/events/services/event.service';

@Module({
  controllers: [EventController],
  providers: [EventService],
})
export class EventsModule {}
