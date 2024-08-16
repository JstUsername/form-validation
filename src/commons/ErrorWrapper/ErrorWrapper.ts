import { Box, styled } from '@mui/material';

export const ErrorWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.5)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-basis: 100%;
  }
`;
