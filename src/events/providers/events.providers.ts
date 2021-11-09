import { Connection } from 'mongoose';
import { EventSchema } from '../schemas/event.schema';

import { config } from 'src/constants';

export const usersProviders = [
  {
    provide: config.database.event_provider,
    useFactory: (connection: Connection) =>
      connection.model('Event', EventSchema),
    inject: [config.database.db_provider],
  },
];
