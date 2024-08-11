import { EmailPhoneFieldProps } from './EmailPhoneField.types';
import FormTextField from '../FormTextField/FormTextField';

export default function EmailPhoneField({ ...props }: EmailPhoneFieldProps) {
  return <FormTextField {...props} />;
}
