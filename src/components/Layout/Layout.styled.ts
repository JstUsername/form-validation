import { Box, styled, Tab } from '@mui/material';

export const LayoutWrapper = styled(Box)`
  margin: 16px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 4px;
`;

export const StyledTab = styled(Tab)`
  min-height: 42px;
  padding: 9px 16px;
`;

export const FormWrapper = styled(Box)`
  width: 100%;
  padding: 16px;
  border-top: 1px solid ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.primary.light};
`;

export const BottomWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 12px 12px 14px;
  border-top: 1px solid ${({ theme }) => theme.palette.primary.main};
`;
