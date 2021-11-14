import { User } from 'src/common/models/user.model';

export const config = {
  port: 3000,
  database: {
    url: 'mongodb://localhost/didomi',
    db_provider: 'DODOMI_BACKEND',
    user_provider: 'USER_MODEL',
    event_provider: 'EVENT_MODEL',
  },
  mysql_config: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'abessrour',
    database: 'didomi',
    models: [User],
    define: {
      timestamps: false,
    },
  },
};
