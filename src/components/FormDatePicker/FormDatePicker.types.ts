import { FieldValues, Path } from 'react-hook-form';

export interface FormDatePickerProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  index?: number;
  disabled: boolean;
  manualValidation?: boolean;
}
