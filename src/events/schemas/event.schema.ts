import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  userID: mongoose.Schema.Types.String,
  consents: mongoose.Schema.Types.Array,
});
