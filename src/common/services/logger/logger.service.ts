import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Logger } from 'src/common/services/logger/models/logger.model';
import { ConsentType } from 'src/common/models';

@Injectable()
export class LoggerService {
  constructor(
    @InjectModel(Logger)
    private loggerModel: typeof Logger,
  ) {}

  async logAction(
    userID: string,
    notification: ConsentType,
    action: boolean,
  ): Promise<void> {
    try {
      await this.loggerModel.create({
        userID,
        notification,
        action,
      });
    } catch (e) {
      console.log('e', e);
      throw new HttpException(
        `Error logging: ${userID}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
