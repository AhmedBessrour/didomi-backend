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
  id: string;

  @ForeignKey(() => User)
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

  @BelongsTo(() => User)
  user: User;
}
