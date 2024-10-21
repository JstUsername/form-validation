import { styled, TextField } from '@mui/material';

export const StyledTextField = styled(TextField)`
  & .MuiInputBase-input {
    min-width: 220px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-basis: 100%;
  }
`;
