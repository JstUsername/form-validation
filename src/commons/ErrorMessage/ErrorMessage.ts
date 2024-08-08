import { styled, Typography } from '@mui/material';

export const ErrorMessage = styled(Typography)`
  margin-left: 2px;
  color: ${({ theme }) => theme.palette.error.main};
`;
