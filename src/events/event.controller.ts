import { Controller, Body, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { UpdateConsentsDto } from 'src/events/dto/event.dto';
import { EventService } from 'src/events/event.service';

@ApiTags('events')
@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @ApiOperation({ summary: 'Update user consents' })
  @ApiBody({ type: UpdateConsentsDto })
  @ApiResponse({ status: 201, description: 'User consents updates.' })
  updateConsents(@Body() updateConsentsDto: UpdateConsentsDto): Promise<void> {
    return this.eventService.insertOne(updateConsentsDto);
  }
}
