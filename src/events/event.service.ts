import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuidv4 } from 'uuid';

import { Event } from 'src/events/models/event.model';
import { UpdateConsentsDto } from 'src/events/dto/event.dto';
import { ConsentType, IConsent } from 'src/common/models';

import { UserService } from 'src/users/user.service';

type Consents = Partial<Record<ConsentType, boolean>>;

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event)
    private eventModel: typeof Event,
    private userService: UserService,
  ) {}

  async insertOne({
    user: { id },
    consents,
  }: UpdateConsentsDto): Promise<Event> {
    try {
      const eventID = uuidv4(),
        createEventParams = {
          id: eventID,
          userID: id,
          ...this.normalizeConsents(consents),
        };

      let event = await this.findOne(id);
      if (!event) {
        event = await this.eventModel.create(createEventParams);
        await this.userService.updateOne(id, eventID);
      } else {
        return await this.updateOne(id, this.normalizeConsents(consents));
      }
      return event;
    } catch (e) {
      throw new HttpException(
        'Existing or missing parameters',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }

  async findOne(userID: string): Promise<Event> {
    try {
      return await this.eventModel.findOne({
        where: {
          userID,
        },
      });
    } catch (e) {
      throw new HttpException('Event Not Found', HttpStatus.NOT_FOUND);
    }
  }

  async updateOne(userID: string, query: Consents): Promise<Event> {
    try {
      const user = await this.findOne(userID);
      return await user.update(query, {
        where: {
          userID,
        },
      });
    } catch (e) {
      throw new HttpException('Event Not Found', HttpStatus.NOT_FOUND);
    }
  }

  private normalizeConsents(consents: IConsent[]): Consents {
    const notificationsState: Consents = {};
    consents.forEach((consent) => {
      notificationsState[consent.id] = consent.enabled;
    });
    return notificationsState;
  }
}
