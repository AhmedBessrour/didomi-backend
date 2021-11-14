import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { EventController } from 'src/events/event.controller';
import { EventService } from 'src/events/event.service';
import { Event } from 'src/events/models/event.model';
import { UserService } from 'src/users/user.service';
import { User } from 'src/users/models';

@Module({
  imports: [SequelizeModule.forFeature([Event, User])],
  controllers: [EventController],
  providers: [EventService, UserService],
})
export class EventsModule {}
