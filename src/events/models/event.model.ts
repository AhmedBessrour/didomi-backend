import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';

@Table
export class Event extends Model {
  @PrimaryKey
  @Column({
    type: DataType.CHAR(255),
  })
  userID: string;

  @Column({
    type: DataType.ENUM('email_notifications', 'sms_notifications'),
  })
  id: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  enabled?: boolean;
}
