import { Controller, FieldValues } from 'react-hook-form';
import { FormTextFieldProps } from './FormTextField.types';
import { StyledTextField } from '../../commons/StyledTextField/StyledTextField';
import { ErrorWrapper } from '../../commons/ErrorWrapper/ErrorWrapper';
import { ErrorMessage } from '../../commons/ErrorMessage/ErrorMessage';

const FormTextField = <T extends FieldValues>({ ...props }: FormTextFieldProps<T>) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, fieldState: { error } }) => (
        <ErrorWrapper>
          <StyledTextField {...field} {...props} id={props.name} variant="outlined" error={!!error} />
          {!!error?.message && <ErrorMessage sx={{ color: 'error.main' }}>{error?.message}</ErrorMessage>}
        </ErrorWrapper>
      )}
    />
  );
};

export default FormTextField;
