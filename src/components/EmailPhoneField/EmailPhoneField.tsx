import { EmailPhoneFieldProps } from './EmailPhoneField.types';
import { StyledTextField } from '../../commons/StyledTextField/StyledTextField';

export default function EmailPhoneField({ required, id, type, label, placeholder }: EmailPhoneFieldProps) {
  return (
    <StyledTextField
      type={type}
      required={required}
      id={id}
      variant="outlined"
      label={label}
      placeholder={placeholder}
    />
  );
}
