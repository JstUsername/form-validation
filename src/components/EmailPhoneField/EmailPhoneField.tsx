import { EmailPhoneFieldProps } from './EmailPhoneField.types';
import FormTextField from '../FormTextField/FormTextField';

const EmailPhoneField = ({ ...props }: EmailPhoneFieldProps) => {
  return <FormTextField {...props} />;
};

export default EmailPhoneField;
