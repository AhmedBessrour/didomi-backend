import { Document } from 'mongoose';
import { IConsent } from 'src/common/models';

export interface Event extends Document {
  user: {
    id: string;
  };
  consents: IConsent;
}
