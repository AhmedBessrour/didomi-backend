import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { EventController } from 'src/events/event.controller';

import { EventService } from 'src/events/event.service';
import { UserService } from 'src/users/user.service';
import { LoggerService } from 'src/common/services/logger/logger.service';

import { Event } from 'src/events/models/event.model';
import { User } from 'src/users/models';
import { Logger } from 'src/common/services/logger/models/logger.model';

@Module({
  imports: [SequelizeModule.forFeature([Event, User, Logger])],
  controllers: [EventController],
  providers: [EventService, UserService, LoggerService],
  exports: [SequelizeModule],
})
export class EventsModule {}
