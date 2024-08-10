import { Control } from 'react-hook-form';
import { ContactInformationValidationType } from '../../schemas/contactInformationValidation';

export interface EmailPhoneFieldProps {
  required?: boolean;
  autoComplete?: string;
  id: 'email' | 'phone';
  label: string;
  placeholder?: string;
  control: Control<ContactInformationValidationType>;
  disabled: boolean;
  error: boolean;
}
