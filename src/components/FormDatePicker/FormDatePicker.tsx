import { Controller, FieldValues, useFormContext, Path } from 'react-hook-form';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ru from 'date-fns/locale/ru/index';
import { FormDatePickerProps } from './FormDatePicker.types';
import { ErrorWrapper } from '../../commons/ErrorWrapper/ErrorWrapper';
import { ErrorMessage } from '../../commons/ErrorMessage/ErrorMessage';

const FormDatePicker = <T extends FieldValues>({
  disabled,
  index,
  manualValidation,
  ...props
}: FormDatePickerProps<T>) => {
  const { control, trigger } = useFormContext<T>();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <Controller
        {...props}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <ErrorWrapper sx={{ flex: 1 }}>
            <DatePicker
              {...field}
              {...props}
              disabled={disabled}
              onChange={(date) => {
                field.onChange(date);
                manualValidation &&
                  trigger([`projectsArray.${index}.beginning`, `projectsArray.${index}.end`] as Path<T>[]);
              }}
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
