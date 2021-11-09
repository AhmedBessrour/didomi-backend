export const config = {
  port: 3000,
  database: {
    url: 'mongodb://localhost/didomi',
    db_provider: 'DATABASE_CONNECTION',
    user_provider: 'USER_MODEL',
    event_provider: 'EVENT_MODEL',
  },
};
