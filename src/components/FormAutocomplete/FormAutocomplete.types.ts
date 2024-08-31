import { FieldValues, Path } from 'react-hook-form';

export interface FormAutocompleteProps<T extends FieldValues> {
  name: Path<T>;
  disabled: boolean;
  manualValidation?: boolean;
}
