import { Control } from 'react-hook-form';
import { ContactInformationType } from '../ContactInformation/ContactInformation.types';

export interface EmailPhoneFieldProps {
  required?: boolean;
  autoComplete?: string;
  id: 'email' | 'phone';
  label: string;
  placeholder?: string;
  control: Control<ContactInformationType>;
  disabled: boolean;
  error: boolean;
}
