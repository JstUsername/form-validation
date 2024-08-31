import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@mui/material';
import { FormCheckboxProps } from './FormCheckbox.types';
import { ErrorWrapper } from '../../commons/ErrorWrapper/ErrorWrapper';
import { ErrorMessage } from '../../commons/ErrorMessage/ErrorMessage';

const FormCheckbox = ({ name, disabled, label }: FormCheckboxProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error }, formState: { errors } }) => (
        <ErrorWrapper sx={{ alignItems: 'flex-start' }}>
          <FormControlLabel
            required
            control={
              <Checkbox
                {...field}
                checked={field.value}
                onChange={(event) => field.onChange(event.target.checked)}
                disabled={disabled}
              />
            }
            label={label}
            sx={{ color: errors.activity ? 'error.main' : 'text.primary', margin: 0 }}
          />
          {!!error?.message && <ErrorMessage sx={{ marginLeft: 1.5 }}>{error.message}</ErrorMessage>}
        </ErrorWrapper>
      )}
    />
  );
};

export default FormCheckbox;
