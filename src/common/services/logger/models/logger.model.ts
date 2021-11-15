import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';

@Table({
  modelName: 'Logs',
})
export class Logger extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id?: number;

  @Column({
    type: DataType.TEXT,
  })
  userID?: string;

  @Column({
    type: DataType.ENUM,
    values: ['email_notifications', 'sms_notifications'],
  })
  notification?: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  action?: boolean;
}
