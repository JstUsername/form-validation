import { Control } from 'react-hook-form';
import { ContactInformationValidationType } from '../../schemas/contactInformationValidation';

export interface PhoneFieldProps {
  required?: boolean;
  autoComplete?: string;
  name: 'phone';
  label: string;
  placeholder?: string;
  control: Control<ContactInformationValidationType>;
  disabled: boolean;
}

export interface PhoneMaskProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}
