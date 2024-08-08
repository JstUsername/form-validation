import { EmailPhoneFieldProps } from './EmailPhoneField.types';
import CustomTextField from '../CustomTextField/CustomTextField';

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
    <CustomTextField
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
