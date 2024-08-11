import { FieldValues, Path, Control } from 'react-hook-form';

export interface FormDatePickerProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  disabled: boolean;
}
