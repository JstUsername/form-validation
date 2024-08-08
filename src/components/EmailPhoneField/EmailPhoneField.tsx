import { EmailPhoneFieldProps } from './EmailPhoneField.types';
import FormTextField from '../FormTextField/FormTextField';

export default function EmailPhoneField({
  required,
  autoComplete,
  id,
  label,
  placeholder,
  control,
  disabled,
  error,
}: EmailPhoneFieldProps) {
  return (
    <FormTextField
      required={required}
      autoComplete={autoComplete}
      id={id}
      label={label}
      placeholder={placeholder}
      control={control}
      disabled={disabled}
      error={error}
    />
  );
}
