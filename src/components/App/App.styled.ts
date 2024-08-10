import { Box, styled, Tab, Tabs } from '@mui/material';

export const StyledTabs = styled(Tabs)<{ error: string }>`
  min-height: 42px;
  margin-bottom: -1px;
    
  & .MuiTabs-indicator {
    background-color: ${({ error, theme }) => (error === 'true' ? theme.palette.error.main : theme.palette.primary.main)};
  },
`;

export const StyledTab = styled(Tab)<{ error: string }>`
  min-height: 42px;
  padding: 9px 16px;

  &.MuiTab-root {
    color: ${({ error, theme }) => (error === 'true' ? theme.palette.error.main : theme.palette.primary.main)};
  }

  &.Mui-selected {
    color: ${({ error, theme }) => (error === 'true' ? theme.palette.error.main : theme.palette.primary.main)};
  }
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
