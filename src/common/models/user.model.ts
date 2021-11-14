import { Column, Model, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  email: string;

  @Column
  consents?: string;
}
