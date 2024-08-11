import { Controller, FieldValues } from 'react-hook-form';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ru from 'date-fns/locale/ru/index';
import { FormDatePickerProps } from './FormDatePicker.types';
import { ErrorWrapper } from '../../commons/ErrorWrapper/ErrorWrapper';
import { ErrorMessage } from '../../commons/ErrorMessage/ErrorMessage';

export default function FormDatePicker<T extends FieldValues>({
  label,
  name,
  control,
  disabled,
}: FormDatePickerProps<T>) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <ErrorWrapper sx={{ flex: 1 }}>
            <DatePicker
              {...field}
              label={label}
              onChange={(date) => field.onChange(date)}
              disabled={disabled}
              disablePast={!!error}
            />
            {!!error?.message && (
              <ErrorMessage sx={{ color: 'error.main', marginLeft: '2px' }}>{error?.message}</ErrorMessage>
            )}
          </ErrorWrapper>
        )}
      />
    </LocalizationProvider>
  );
}
