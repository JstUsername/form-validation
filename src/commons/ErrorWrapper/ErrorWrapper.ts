import { Box, styled } from '@mui/material';

export const ErrorWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-basis: 100%;
  }
`;
