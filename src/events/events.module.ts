import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { EventController } from 'src/events/event.controller';
import { EventService } from 'src/events/event.service';
import { DatabaseModule } from 'src/common/database.module';
import { Event } from 'src/events/models/event.model';
import { UserService } from '../users/user.service';
import { User } from '../users/models';

@Module({
  imports: [DatabaseModule, SequelizeModule.forFeature([Event, User])],
  controllers: [EventController],
  providers: [EventService, UserService],
})
export class EventsModule {}
