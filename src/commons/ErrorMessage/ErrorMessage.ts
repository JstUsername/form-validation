import { styled, Typography } from '@mui/material';

export const ErrorMessage = styled(Typography)`
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.palette.error.main};
`;
