import { Document } from 'mongoose';
import { IConsent } from 'src/common/models';

export class User extends Document {
  id?: string;
  email: string;
  consents?: IConsent[];
}
