import { Controller, FieldValues } from 'react-hook-form';
import { FormTextFieldProps } from './FormTextField.types';
import { StyledTextField } from '../../commons/StyledTextField/StyledTextField';

export default function FormTextField<T extends FieldValues>({
  required,
  autoComplete,
  id,
  label,
  placeholder,
  control,
  disabled,
  error,
}: FormTextFieldProps<T>) {
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
