export interface IConsent {
  id: ConsentType;
  enabled: boolean;
}

export type ConsentType = 'email_notifications' | 'sms_notifications';
