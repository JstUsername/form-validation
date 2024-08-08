import { Control, FieldValues, Path } from 'react-hook-form';

export interface FormTextFieldProps<T extends FieldValues> {
  required?: boolean;
  autoComplete?: string;
  id: Path<T>;
  label: string;
  placeholder?: string;
  control: Control<T>;
  disabled?: boolean;
  error: boolean;
}