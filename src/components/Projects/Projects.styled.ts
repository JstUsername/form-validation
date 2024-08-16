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
  box-shadow: ${({ theme }) => theme.customShadows.primary};
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;
