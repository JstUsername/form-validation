import { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';
import { PhoneMaskProps, PhoneFieldProps } from './PhoneField.types';
import FormTextField from '../FormTextField/FormTextField';

const PhoneMask = forwardRef<HTMLInputElement, PhoneMaskProps>((props, ref) => {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+7(000) 000-00-00"
      inputRef={ref}
      onAccept={(value: string) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

PhoneMask.displayName = 'PhoneMask';

const PhoneField = ({ ...props }: PhoneFieldProps) => {
  return (
    <FormTextField
      {...props}
      InputProps={{
        inputComponent: PhoneMask,
      }}
    />
  );
};

export default PhoneField;
