import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.String,
  userID: mongoose.Schema.Types.String,
  consents: mongoose.Schema.Types.Array,
});
