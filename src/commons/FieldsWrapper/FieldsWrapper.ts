import { Box, styled } from '@mui/material';

export const FieldsWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};
`;
