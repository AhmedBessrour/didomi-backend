import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from "uuid";
import { InjectModel } from '@nestjs/sequelize';

import { Event } from 'src/events/models/event.model';
import { UpdateConsentsDto } from 'src/events/dto/event.dto';
import { UserService } from 'src/users/user.service';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event)
    private eventModel: typeof Event,
    private userService: UserService,
  ) {}

  async insertOne({ user, consents }: UpdateConsentsDto): Promise<Event> {
    try {
      const event = await this.eventModel.create({
        userID: uuidv4(),
        id: consents.id,
        enabled: consents.enabled,
      });
      await this.userService.updateOne(user.id, event.userID);
      return event;
    } catch (e) {
      throw new HttpException(
        'Existing or missing parameters',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }
}
