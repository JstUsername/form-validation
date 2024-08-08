import { Control } from 'react-hook-form';
import { ProjectFormType } from '../ProjectForm/ProjectForm.types';

export interface CustomDatePickerProps {
  label: string;
  name: 'beginning' | 'end';
  control: Control<ProjectFormType>;
  disabled: boolean;
  error: boolean;
}
