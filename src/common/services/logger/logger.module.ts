import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { LoggerService } from 'src/common/services/logger/logger.service';
import { Logger } from 'src/common/services/logger/models/logger.model';

@Module({
  imports: [SequelizeModule.forFeature([Logger])],
  providers: [LoggerService],
})
export class LoggerModule {}
