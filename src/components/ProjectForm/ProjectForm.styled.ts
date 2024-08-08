import { Box, styled } from '@mui/material';

export const DatePickerWrapper = styled(Box)`
  display: flex;
  gap: 12px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`;

export const HeaderWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
