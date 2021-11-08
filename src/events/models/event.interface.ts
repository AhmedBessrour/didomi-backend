import { IConsent } from 'src/common/models';

export interface Event {
  user: {
    id: string;
  };
  consents: IConsent;
}
