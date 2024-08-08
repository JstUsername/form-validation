import { Controller } from 'react-hook-form';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ru from 'date-fns/locale/ru/index';
import { CustomDatePickerProps } from './CustomDatePicker.types';

export default function CustomDatePicker({ label, name, control, disabled, error }: CustomDatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            {...field}
            label={label}
            value={field.value}
            onChange={(date) => field.onChange(date)}
            sx={{ flex: 1 }}
            disabled={disabled}
            disablePast={error}
          />
        )}
      />
    </LocalizationProvider>
  );
}
