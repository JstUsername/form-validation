import { Control, FieldValues, Path } from 'react-hook-form';

export interface FormAutocompleteProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  disabled: boolean;
}
