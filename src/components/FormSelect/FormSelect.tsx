import { Controller, FieldValues } from 'react-hook-form';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { FormSelectProps } from './FormSelect.types';
import { ErrorWrapper } from '../../commons/ErrorWrapper/ErrorWrapper';
import { ErrorMessage } from '../../commons/ErrorMessage/ErrorMessage';

export default function FormSelect<T extends FieldValues>({
  required,
  name,
  label,
  control,
  disabled,
}: FormSelectProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <ErrorWrapper>
            <InputLabel id={`${name}-label`} required={required} error={!!error}>
              {label}
            </InputLabel>
            <Select
              {...field}
              labelId={`${name}-label`}
              id={name}
              label={label}
              onChange={(event: SelectChangeEvent) => field.onChange(event.target.value)}
              disabled={disabled}
              error={!!error}
            >
              <MenuItem value="Разработчик">Разработчик</MenuItem>
              <MenuItem value="Тестировщик">Тестировщик</MenuItem>
              <MenuItem value="Аналитик">Аналитик</MenuItem>
            </Select>
            {!!error?.message && (
              <ErrorMessage sx={{ color: 'error.main', marginLeft: '2px' }}>{error?.message}</ErrorMessage>
            )}
          </ErrorWrapper>
        </FormControl>
      )}
    />
  );
}
