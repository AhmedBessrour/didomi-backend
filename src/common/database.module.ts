import { Module } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { config } from 'src/config';

@Module({
  imports: [
    SequelizeModule.forRoot(config.mysql_config as SequelizeModuleOptions),
  ],
})
export class DatabaseModule {}
