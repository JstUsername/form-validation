import { useMediaQuery, useTheme } from '@mui/material';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { FormAutocompleteProps } from './FormAutocomplete.types';
import { StyledAutocomplete } from './FormAutocomplete.styled';
import { StyledTextField } from '../../commons/StyledTextField/StyledTextField';
import { employeeSkills } from '../../constants/employeeSkills';
import { ErrorMessage } from '../../commons/ErrorMessage/ErrorMessage';
import { ErrorWrapper } from '../../commons/ErrorWrapper/ErrorWrapper';

const FormAutocomplete = <T extends FieldValues>({
  disabled,
  manualValidation,
  ...props
}: FormAutocompleteProps<T>) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { control, trigger } = useFormContext<T>();

  return (
    <Controller
      {...props}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <ErrorWrapper>
          <StyledAutocomplete
            {...field}
            {...props}
            multiple
            limitTags={isSmallScreen ? 1 : 3}
            id={props.name}
            options={employeeSkills}
            disabled={disabled}
            filterSelectedOptions
            renderInput={(params) => <StyledTextField {...params} label="Навыки *" error={!!error} />}
            onChange={(_event, newSkill) => {
              field.onChange(newSkill);
              manualValidation && trigger(props.name);
            }}
          />
          {!!error?.message && <ErrorMessage sx={{ color: 'error.main' }}>{error?.message}</ErrorMessage>}
        </ErrorWrapper>
      )}
    />
  );
};

export default FormAutocomplete;
