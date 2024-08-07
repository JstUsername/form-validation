import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ru from 'date-fns/locale/ru/index';

export default function CustomDatePicker({ label }: { label: string }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <DatePicker label={label} sx={{ flex: 1 }} />
    </LocalizationProvider>
  );
}
