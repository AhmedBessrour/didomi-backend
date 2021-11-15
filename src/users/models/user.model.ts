import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { Event } from 'src/events/models';

@Table
export class User extends Model {
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
    type: DataType.CHAR(50),
    unique: true,
    validate: {
      isEmail: true,
    },
  })
  email: string;

  @HasMany(() => Event)
  consents?: Event[];
}
