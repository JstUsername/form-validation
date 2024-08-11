import { Controller } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@mui/material';
import { FormCheckboxProps } from './FormCheckbox.types';
import { ErrorWrapper } from '../../commons/ErrorWrapper/ErrorWrapper';
import { ErrorMessage } from '../../commons/ErrorMessage/ErrorMessage';

const FormCheckbox = ({ name, disabled }: FormCheckboxProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error }, formState: { errors } }) => (
        <ErrorWrapper sx={{ alignItems: 'flex-start' }}>
          <FormControlLabel
            required
            control={
              <Checkbox {...field} onChange={(event) => field.onChange(event.target.checked)} disabled={disabled} />
            }
            label="За любой движ"
            sx={{ color: errors.activity ? 'error.main' : 'text.primary', margin: 0 }}
          />
          {!!error?.message && <ErrorMessage sx={{ marginLeft: '12px' }}>{error.message}</ErrorMessage>}
        </ErrorWrapper>
      )}
    />
  );
};

export default FormCheckbox;
