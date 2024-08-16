import { useMediaQuery, useTheme } from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';
import { FormAutocompleteProps } from './FormAutocomplete.types';
import { StyledAutocomplete } from './FormAutocomplete.styled';
import { StyledTextField } from '../../commons/StyledTextField/StyledTextField';
import { employeeSkills } from './FormAutocomplete.constants';
import { ErrorMessage } from '../../commons/ErrorMessage/ErrorMessage';
import { ErrorWrapper } from '../../commons/ErrorWrapper/ErrorWrapper';

const FormAutocomplete = <T extends FieldValues>({ ...props }: FormAutocompleteProps<T>) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Controller
      {...props}
      render={({ field, fieldState: { error } }) => (
        <ErrorWrapper>
          <StyledAutocomplete
            {...field}
            {...props}
            multiple
            limitTags={isSmallScreen ? 1 : 3}
            id={props.name}
            options={employeeSkills}
            filterSelectedOptions
            renderInput={(params) => <StyledTextField {...params} label="Навыки *" error={!!error} />}
            onChange={(_event, newSkill) => field.onChange(newSkill)}
          />
          {!!error?.message && <ErrorMessage sx={{ color: 'error.main' }}>{error?.message}</ErrorMessage>}
        </ErrorWrapper>
      )}
    />
  );
};

export default FormAutocomplete;
