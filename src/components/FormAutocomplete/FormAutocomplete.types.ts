import { Control } from 'react-hook-form';
import { ProjectFormType } from '../ProjectForm/ProjectForm.types';

export interface FormAutocompleteProps {
  control: Control<ProjectFormType>;
  disabled: boolean;
  error: boolean;
}
