import { styled, Box } from '@mui/material';

export const FormWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: fit-content;
  padding: 16px 12px 32px;
  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow: ${({ theme }) => theme.customShadows.primary};
  border-radius: 4px;
`;
