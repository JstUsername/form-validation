import { useMediaQuery, useTheme } from '@mui/material';
import { StyledAutocomplete } from './CustomAutocomplete.styled';
import { StyledTextField } from '../../commons/StyledTextField/StyledTextField';
import { employeeSkills } from './CustomAutocomplete.constants';

export default function CustomAutocomplete() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledAutocomplete
      multiple
      limitTags={isSmallScreen ? 1 : 3}
      id="skills-autocomplete"
      options={employeeSkills}
      filterSelectedOptions
      renderInput={(params) => <StyledTextField {...params} required label="Навыки" />}
    />
  );
}
