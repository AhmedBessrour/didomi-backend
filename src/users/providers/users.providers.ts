import { Connection } from 'mongoose';
import { UserSchema } from '../schemas/user.schema';

import { config } from 'src/config';

export const usersProviders = [
  {
    provide: config.database.user_provider,
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: [config.database.db_provider],
  },
];
