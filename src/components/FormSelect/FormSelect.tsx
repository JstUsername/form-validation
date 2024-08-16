import { Controller, FieldValues } from 'react-hook-form';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { FormSelectProps } from './FormSelect.types';
import { ErrorWrapper } from '../../commons/ErrorWrapper/ErrorWrapper';
import { ErrorMessage } from '../../commons/ErrorMessage/ErrorMessage';

const FormSelect = <T extends FieldValues>({ ...props }: FormSelectProps<T>) => {
  return (
    <Controller
      {...props}
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <ErrorWrapper>
            <InputLabel {...props} id={`${props.name}-label`} error={!!error}>
              {props.label}
            </InputLabel>
            <Select
              {...field}
              {...props}
              defaultValue=""
              labelId={`${props.name}-label`}
              id={props.name}
              onChange={(event: SelectChangeEvent) => field.onChange(event.target.value)}
              error={!!error}
            >
              {props.items.map((menuItem, menuItemIndex) => (
                <MenuItem key={menuItemIndex} value={menuItem}>
                  {menuItem}
                </MenuItem>
              ))}
            </Select>
            {!!error?.message && <ErrorMessage sx={{ color: 'error.main' }}>{error?.message}</ErrorMessage>}
          </ErrorWrapper>
        </FormControl>
      )}
    />
  );
};

export default FormSelect;
