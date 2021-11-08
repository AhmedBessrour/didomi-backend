import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  email: mongoose.Schema.Types.String,
  consents: mongoose.Schema.Types.Array,
});
