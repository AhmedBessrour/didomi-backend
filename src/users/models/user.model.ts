import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.CHAR(255),
  })
  id: string;

  @Column({
    type: DataType.CHAR(50),
  })
  email: string;

  @Column({
    type: DataType.CHAR(50),
  })
  consents?: string;
}
