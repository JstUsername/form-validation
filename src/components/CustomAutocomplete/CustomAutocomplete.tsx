import { useMediaQuery, useTheme } from '@mui/material';
import { Controller } from 'react-hook-form';
import { CustomAutocompleteProps } from './CustomAutocomplete.types';
import { StyledAutocomplete } from './CustomAutocomplete.styled';
import { StyledTextField } from '../../commons/StyledTextField/StyledTextField';
import { employeeSkills } from './CustomAutocomplete.constants';

export default function CustomAutocomplete({ control, disabled, error }: CustomAutocompleteProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Controller
      name="skills"
      control={control}
      render={({ field }) => (
        <StyledAutocomplete
          {...field}
          multiple
          limitTags={isSmallScreen ? 1 : 3}
          id="skills-autocomplete"
          options={employeeSkills}
          filterSelectedOptions
          renderInput={(params) => <StyledTextField {...params} label="Навыки *" error={error} />}
          value={field.value}
          onChange={(_event, newSkill) => field.onChange(newSkill)}
          disabled={disabled}
        />
      )}
    />
  );
}
