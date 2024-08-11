import { Controller } from 'react-hook-form';
import { Checkbox } from '@mui/material';
import { FormCheckboxProps } from './FormCheckbox.types';

export default function FormCheckbox({ id, disabled }: FormCheckboxProps) {
  return (
    <Controller
      name={id}
      render={({ field }) => (
        <Checkbox
          {...field}
          onChange={(event) => field.onChange(event.target.checked)}
          checked={field.value}
          disabled={disabled}
        />
      )}
    />
  );
}
