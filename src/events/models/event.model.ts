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
  id: string;

  @Column({
    type: DataType.CHAR(255),
  })
  userID: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  email_notifications?: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  sms_notifications?: boolean;
}
