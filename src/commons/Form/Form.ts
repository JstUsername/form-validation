import { styled } from '@mui/material';

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: fit-content;
  padding: 16px 12px 32px;
  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow:
    0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;
