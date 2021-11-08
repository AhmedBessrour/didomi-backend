import { Controller, Post } from '@nestjs/common';

@Controller('events')
export class EventController {
    @Post()
    addEvents(): string {
        return 'This action add events';
    }
}
