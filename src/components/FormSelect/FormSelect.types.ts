import { Path, Control, FieldValues } from 'react-hook-form';

export interface FormSelectProps<T extends FieldValues> {
  required?: boolean;
  name: Path<T>;
  label: string;
  control: Control<T>;
  disabled: boolean;
  items: string[];
}
