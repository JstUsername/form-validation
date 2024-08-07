import { Box, Button, styled } from '@mui/material';

export const ProjectsWrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AddCardButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-content: center;
  min-height: 400px;
  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow:
    0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;

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
