import { EmailPhoneFieldProps } from './EmailPhoneField.types';
import FormTextField from '../FormTextField/FormTextField';

export default function EmailPhoneField({
  required,
  autoComplete,
  name,
  label,
  placeholder,
  control,
  disabled,
}: EmailPhoneFieldProps) {
  return (
    <FormTextField
      required={required}
      autoComplete={autoComplete}
      name={name}
      label={label}
      placeholder={placeholder}
      control={control}
      disabled={disabled}
    />
  );
}
