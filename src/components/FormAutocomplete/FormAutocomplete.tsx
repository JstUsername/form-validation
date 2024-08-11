import { useMediaQuery, useTheme } from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';
import { FormAutocompleteProps } from './FormAutocomplete.types';
import { StyledAutocomplete } from './FormAutocomplete.styled';
import { StyledTextField } from '../../commons/StyledTextField/StyledTextField';
import { employeeSkills } from './FormAutocomplete.constants';
import { ErrorMessage } from '../../commons/ErrorMessage/ErrorMessage';
import { ErrorWrapper } from '../../commons/ErrorWrapper/ErrorWrapper';

export default function FormAutocomplete<T extends FieldValues>({ name, control, disabled }: FormAutocompleteProps<T>) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <ErrorWrapper>
          <StyledAutocomplete
            {...field}
            multiple
            limitTags={isSmallScreen ? 1 : 3}
            id={name}
            options={employeeSkills}
            filterSelectedOptions
            renderInput={(params) => <StyledTextField {...params} label="Навыки *" error={!!error} />}
            onChange={(_event, newSkill) => field.onChange(newSkill)}
            disabled={disabled}
          />
          {!!error?.message && (
            <ErrorMessage sx={{ color: 'error.main', marginLeft: '2px' }}>{error?.message}</ErrorMessage>
          )}
        </ErrorWrapper>
      )}
    />
  );
}
