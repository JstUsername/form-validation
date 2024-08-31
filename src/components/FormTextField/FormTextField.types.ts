import { FieldValues, Path } from 'react-hook-form';
import { InputBaseComponentsPropsOverrides } from '@mui/material';

export interface FormTextFieldProps<T extends FieldValues> {
  required?: boolean;
  autoComplete?: string;
  name: Path<T>;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  InputProps?: InputBaseComponentsPropsOverrides;
  manualValidation?: boolean;
}
