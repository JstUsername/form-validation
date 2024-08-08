import { Controller } from 'react-hook-form';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { CustomSelectProps } from './CustomSelect.types';

export default function CustomSelect({ required, id, label, control, disabled, error }: CustomSelectProps) {
  return (
    <Controller
      name="role"
      control={control}
      render={({ field }) => (
        <FormControl>
          <InputLabel id={`${id}-label`} required={required} error={error}>
            {label}
          </InputLabel>
          <Select
            {...field}
            labelId={`${id}-label`}
            id={id}
            value={field.value}
            label={label}
            onChange={(event: SelectChangeEvent) => field.onChange(event.target.value)}
            disabled={disabled}
            error={error}
          >
            <MenuItem value="Разработчик">Разработчик</MenuItem>
            <MenuItem value="Тестировщик">Тестировщик</MenuItem>
            <MenuItem value="Аналитик">Аналитик</MenuItem>
          </Select>
        </FormControl>
      )}
    />
  );
}
