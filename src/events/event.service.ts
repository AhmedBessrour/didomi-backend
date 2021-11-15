import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
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

  private notificationId: ConsentType = 'email_notifications';

  async insertOne({
    user: { id },
    consents,
  }: UpdateConsentsDto): Promise<Event> {
    try {
      const eventID = uuidv4(),
        createEventParams = {
          eventID: eventID,
          userID: id,
          id: this.notificationId,
          enabled: false,
        };

      let event = await this.findOne(id, this.notificationId);
      if (!event) {
        event = await this.eventModel.create(createEventParams);
        await this.userService.updateOne(id, eventID);
      } else {
        return await this.updateOne(id, this.notificationId);
      }
      return event;
    } catch (e) {
      console.log('e', e);
      throw new HttpException(
        'Existing or missing parameters',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }

  async findOne(userID: string, notification_id?: ConsentType): Promise<Event> {
    try {
      console.log('query', {
        [Op.and]: [
          {
            userID,
          },
          {
            id: notification_id,
          },
        ],
      });
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
  ): Promise<Event> {
    try {
      const user = await this.findOne(userID, this.notificationId);
      return await user.update(
        { enabled: true },
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

  private normalizeConsents(consents: IConsent[]): Consents {
    const notificationsState: Consents = {};
    consents.forEach((consent) => {
      notificationsState[consent.id] = consent.enabled;
    });
    return notificationsState;
  }
}
