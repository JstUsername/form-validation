import { Path, FieldValues } from 'react-hook-form';

export interface FormSelectProps<T extends FieldValues> {
  required?: boolean;
  name: Path<T>;
  label: string;
  disabled: boolean;
  items: string[];
  manualValidation?: boolean;
}
