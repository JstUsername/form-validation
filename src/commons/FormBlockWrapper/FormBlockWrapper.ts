import { Box, styled } from '@mui/material';

export const FormBlockWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3.5)};
`;
