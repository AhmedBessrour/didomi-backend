import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

import { Event } from 'src/events/models/event.model';
import { UpdateConsentsDto } from 'src/events/dto/event.dto';
import { ConsentType, IConsent } from 'src/common/models';

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
  }: UpdateConsentsDto): Promise<void> {
    try {
      consents.map(async (consent) => {
        return await this.updateOrInsertMany(id, consent);
      });
    } catch (e) {
      throw new HttpException(
        'Existing or missing parameters',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }

  private async updateOrInsertMany(
    id: string,
    { id: consentID, enabled }: IConsent,
  ) {
    const eventID = uuidv4(),
      createEventParams = {
        eventID: eventID,
        userID: id,
        id: consentID,
        enabled: enabled,
      };

    let event = await this.findOne(id, consentID);
    if (!event) {
      event = await this.eventModel.create(createEventParams);
      await this.userService.updateOne(id, eventID);
    } else {
      return await this.updateOne(id, consentID, enabled);
    }
    return event;
  }

  async findOne(userID: string, notification_id?: ConsentType): Promise<Event> {
    try {
      return await this.eventModel.findOne({
        where: {
          [Op.and]: [
            {
              userID,
            },
            {
              id: notification_id,
            },
          ],
        },
      });
    } catch (e) {
      throw new HttpException('Event Not Found', HttpStatus.NOT_FOUND);
    }
  }

  async updateOne(
    userID: string,
    notification_id: ConsentType,
    notification_state: boolean,
  ): Promise<Event> {
    try {
      const user = await this.findOne(userID, notification_id);
      return await user.update(
        { enabled: notification_state },
        {
          where: {
            [Op.and]: [
              {
                userID,
              },
              {
                id: notification_id,
              },
            ],
          },
        },
      );
    } catch (e) {
      throw new HttpException('Event Not Found', HttpStatus.NOT_FOUND);
    }
  }
}
