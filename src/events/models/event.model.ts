import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from 'src/users/models';

@Table
export class Event extends Model {
  @PrimaryKey
  @Column({
    type: DataType.CHAR(255),
  })
  eventID: number;

  @Column({
    type: DataType.ENUM,
    values: ['email_notifications', 'sms_notifications'],
  })
  id?: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  enabled?: boolean;

  @PrimaryKey
  @ForeignKey(() => User)
  @Column({
    type: DataType.CHAR(255),
  })
  userID: string;

  @BelongsTo(() => User)
  user: User;
}
