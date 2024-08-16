import { Control, FieldValues, Path } from 'react-hook-form';
import { InputBaseComponentsPropsOverrides } from '@mui/material';

export interface FormTextFieldProps<T extends FieldValues> {
  required?: boolean;
  autoComplete?: string;
  name: Path<T>;
  label: string;
  placeholder?: string;
  control: Control<T>;
  disabled?: boolean;
  InputProps?: InputBaseComponentsPropsOverrides;
}
