import { Module } from '@nestjs/common';
import { EventController } from './controller/event/event.controller';

@Module({
  controllers: [EventController],
})
export class EventsModule {}
