import { CustomTextFieldProps } from './CustomTextField.types';
import { StyledTextField } from '../../commons/StyledTextField/StyledTextField';

export default function CustomTextField({ required, id, label, placeholder }: CustomTextFieldProps) {
  return <StyledTextField required={required} id={id} variant="outlined" label={label} placeholder={placeholder} />;
}
