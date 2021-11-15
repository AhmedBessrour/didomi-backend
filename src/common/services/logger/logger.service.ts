import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Logger } from 'src/common/services/logger/models/logger.model';

@Injectable()
export class LoggerService {
  constructor(
    @InjectModel(Logger)
    private loggerModel: typeof Logger,
  ) {}
}
