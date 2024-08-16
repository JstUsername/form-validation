import { Controller, FieldValues } from 'react-hook-form';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ru from 'date-fns/locale/ru/index';
import { FormDatePickerProps } from './FormDatePicker.types';
import { ErrorWrapper } from '../../commons/ErrorWrapper/ErrorWrapper';
import { ErrorMessage } from '../../commons/ErrorMessage/ErrorMessage';

const FormDatePicker = <T extends FieldValues>({ disabled, ...props }: FormDatePickerProps<T>) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <Controller
        {...props}
        render={({ field, fieldState: { error } }) => (
          <ErrorWrapper sx={{ flex: 1 }}>
            <DatePicker
              {...field}
              {...props}
              disabled={disabled}
              onChange={(date) => field.onChange(date)}
              disablePast={!!error}
            />
            {!!error?.message && <ErrorMessage sx={{ color: 'error.main' }}>{error?.message}</ErrorMessage>}
          </ErrorWrapper>
        )}
      />
    </LocalizationProvider>
  );
};

export default FormDatePicker;
