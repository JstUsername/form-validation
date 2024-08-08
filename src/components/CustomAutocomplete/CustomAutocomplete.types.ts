import { Control } from 'react-hook-form';
import { ProjectFormType } from '../ProjectForm/ProjectForm.types';

export interface CustomAutocompleteProps {
  control: Control<ProjectFormType>;
  disabled: boolean;
  error: boolean;
}
