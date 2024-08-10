export type ErrorType = {
  contactError: boolean;
  projectError: boolean;
};

export interface ContactInformationType {
  disabled: boolean;
  error: boolean;
  surname: string;
  name: string;
  patronymic?: string;
  phone: string;
  email?: string;
  activity: boolean;
}
