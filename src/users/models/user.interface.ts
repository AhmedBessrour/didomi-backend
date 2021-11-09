import { Document } from 'mongoose';
import { IConsent } from 'src/common/models';

export interface User extends Document {
  id: string;
  email: string;
  consents: IConsent[];
}
