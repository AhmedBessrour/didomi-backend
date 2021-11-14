import { Controller, Body, Get, Post, Delete } from '@nestjs/common';
import { UpdateConsentsDto } from 'src/events/dto/event.dto';
import { EventService } from 'src/events/event.service';
import { Event } from 'src/events/models/event.model';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  updateConsents(@Body() updateConsentsDto: UpdateConsentsDto): Promise<Event> {
    return this.eventService.insertOne(updateConsentsDto);
  }
}
