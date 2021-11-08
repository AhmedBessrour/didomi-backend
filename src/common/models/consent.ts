export interface IConsent {
  id: ConsentType;
  consents: boolean;
}

export enum ConsentType {
  email = 'email_notifications',
  sms = 'sms_notifications',
}
