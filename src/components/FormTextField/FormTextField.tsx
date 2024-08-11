import { Controller, FieldValues } from 'react-hook-form';
import { FormTextFieldProps } from './FormTextField.types';
import { StyledTextField } from '../../commons/StyledTextField/StyledTextField';
import { ErrorWrapper } from '../../commons/ErrorWrapper/ErrorWrapper';
import { ErrorMessage } from '../../commons/ErrorMessage/ErrorMessage';

export default function FormTextField<T extends FieldValues>({
  required,
  autoComplete,
  name,
  label,
  placeholder,
  control,
  disabled,
}: FormTextFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <ErrorWrapper>
          <StyledTextField
            {...field}
            required={required}
            autoComplete={autoComplete}
            id={name}
            variant="outlined"
            label={label}
            placeholder={placeholder}
            disabled={disabled}
            error={!!error}
          />
          {!!error?.message && (
            <ErrorMessage sx={{ color: 'error.main', marginLeft: '2px' }}>{error?.message}</ErrorMessage>
          )}
        </ErrorWrapper>
      )}
    />
  );
}
