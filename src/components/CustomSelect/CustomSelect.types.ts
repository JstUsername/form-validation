import { ProjectFormType } from '../ProjectForm/ProjectForm.types';
import { Control } from 'react-hook-form';

export interface CustomSelectProps {
  required?: boolean;
  id: string;
  label: string;
  control: Control<ProjectFormType>;
  disabled: boolean;
  error: boolean;
}
