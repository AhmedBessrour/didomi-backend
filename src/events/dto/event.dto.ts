import { IConsent } from 'src/common/models';

export class UpdateConsentsDto {
  user: {
    id: string;
  };
  consents?: IConsent[];
}
