import { Module } from '@nestjs/common';
import { databaseProviders } from './providers/database.providers';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { config } from 'src/config';

@Module({
  imports: [
    SequelizeModule.forRoot(config.mysql_config as SequelizeModuleOptions),
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
