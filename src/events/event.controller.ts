import { Controller, Body, Post } from '@nestjs/common';
import { UpdateConsentsDto } from 'src/events/dto/event.dto';
import { EventService } from 'src/events/event.service';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  updateConsents(@Body() updateConsentsDto: UpdateConsentsDto): Promise<void> {
    return this.eventService.insertOne(updateConsentsDto);
  }
}
