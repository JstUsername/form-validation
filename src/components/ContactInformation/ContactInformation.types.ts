import { Dispatch, SetStateAction } from 'react';

export type ErrorType = {
  contactError: boolean;
  projectError: boolean;
};

export interface ContactInformationProps {
  contactInformation: ContactInformationType;
  setContactInformation: Dispatch<SetStateAction<ContactInformationType>>;
  setError: Dispatch<SetStateAction<ErrorType>>;
}

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

export interface ContactInformationHandle {
  contactValidate: () => void;
}
