import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.String,
  email: mongoose.Schema.Types.String,
  consents: mongoose.Schema.Types.Array,
});
