import { Column, Model, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class Event extends Model {
  @PrimaryKey
  @Column
  userID: string;

  @Column
  id: string;

  @Column
  enabled?: boolean;
}
