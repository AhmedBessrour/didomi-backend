import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuidv4 } from 'uuid';

import { Event } from 'src/events/models/event.model';
import { UpdateConsentsDto } from 'src/events/dto/event.dto';
import { ConsentType, IConsent } from '../common/models';

import { UserService } from 'src/users/user.service';

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
      const eventID = uuidv4();
      const createEventParams = {
        id: eventID,
        userID: id,
        ...this.normalizeConsents(consents),
      };
      const event = await this.eventModel.create(createEventParams);
      await this.userService.updateOne(id, eventID);
      return event;
    } catch (e) {
      throw new HttpException(
        'Existing or missing parameters',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }

  private normalizeConsents(
    consents: IConsent[],
  ): Partial<Record<ConsentType, boolean>> {
    const notificationsState: Partial<Record<ConsentType, boolean>> = {};
    consents.forEach((consent) => {
      notificationsState[consent.id] = consent.enabled;
    });
    return notificationsState;
  }
}
