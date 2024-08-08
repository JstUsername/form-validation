import { Controller, FieldValues } from 'react-hook-form';
import { CustomTextFieldProps } from './CustomTextField.types';
import { StyledTextField } from '../../commons/StyledTextField/StyledTextField';

export default function CustomTextField<T extends FieldValues>({
  required,
  autoComplete,
  id,
  label,
  placeholder,
  control,
  disabled,
  error,
}: CustomTextFieldProps<T>) {
  return (
    <Controller
      name={id}
      control={control}
      render={({ field }) => (
        <StyledTextField
          {...field}
          required={required}
          autoComplete={autoComplete}
          id={id}
          variant="outlined"
          label={label}
          placeholder={placeholder}
          disabled={disabled}
          error={error}
        />
      )}
    />
  );
}
