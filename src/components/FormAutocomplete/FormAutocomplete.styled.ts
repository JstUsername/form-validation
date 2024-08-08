import { styled, Autocomplete } from '@mui/material';

export const StyledAutocomplete = styled(Autocomplete)`
  & .MuiChip-root {
    box-sizing: border-box;
    height: 24px;
  }
  & .MuiChip-deleteIcon {
    height: 16px;
  }
`;
