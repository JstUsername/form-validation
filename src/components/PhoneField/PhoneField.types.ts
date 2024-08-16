export interface PhoneFieldProps {
  required?: boolean;
  autoComplete?: string;
  name: 'phone';
  label: string;
  placeholder?: string;
  disabled: boolean;
}

export interface PhoneMaskProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}
