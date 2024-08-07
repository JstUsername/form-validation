import { CustomSelectProps } from './CustomSelect.types';
import { useState } from 'react';
import { FormControl, InputLabel, Select, SelectChangeEvent, MenuItem } from '@mui/material';

export default function CustomSelect({ required, id, label }: CustomSelectProps) {
  const [role, setRole] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  return (
    <FormControl>
      <InputLabel id={`${id}-label`} required={required}>
        {label}
      </InputLabel>
      <Select labelId={`${id}-label`} id={id} value={role} label={label} onChange={handleChange}>
        <MenuItem value="Разработчик">Разработчик</MenuItem>
        <MenuItem value="Тестировщик">Тестировщик</MenuItem>
        <MenuItem value="Аналитик">Аналитик</MenuItem>
      </Select>
    </FormControl>
  );
}
