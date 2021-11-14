import * as mongoose from 'mongoose';

import { config } from 'src/config';

export const databaseProviders = [
  {
    provide: config.database.db_provider,
    useFactory: () => mongoose.connect(config.database.url),
  },
];
