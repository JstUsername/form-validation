export interface EmailPhoneFieldProps {
  required?: boolean;
  id: string;
  type: 'email' | 'tel';
  label: string;
  placeholder?: string;
}
