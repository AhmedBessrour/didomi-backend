import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/sequelize';

import { Event } from 'src/events/models/event.model';
import { UpdateConsentsDto } from 'src/events/dto/event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event)
    private eventModel: typeof Event,
  ) {}

  async insertOne(updateConsentsDto: UpdateConsentsDto): Promise<Event> {
    try {
      return await this.eventModel.create({
        id: uuidv4(),
        email: updateConsentsDto.email,
        consents: '',
      });
    } catch (e) {
      throw new HttpException(
        'Existing or missing parameters',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }
}
