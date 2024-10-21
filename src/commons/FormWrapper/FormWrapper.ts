import { styled, Box } from '@mui/material';

export const FormWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: fit-content;
  padding: ${({ theme }) => theme.spacing(2, 1.5, 4)};
  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow: ${({ theme }) => theme.customShadows.primary};
  border-radius: 4px;
`;
