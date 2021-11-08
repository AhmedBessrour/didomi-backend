import { IConsent } from 'src/common/models';

export interface User {
  id: string;
  email: string;
  consents: IConsent[];
}
