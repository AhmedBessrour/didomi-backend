export interface IConsent {
  id: ConsentType;
  enabled: boolean;
}

export enum ConsentType {
  email = 'email_notifications',
  sms = 'sms_notifications',
}
