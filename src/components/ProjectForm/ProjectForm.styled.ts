import { Box, styled } from '@mui/material';

export const DatePickerWrapper = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1.5)};

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`;

export const HeaderWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
