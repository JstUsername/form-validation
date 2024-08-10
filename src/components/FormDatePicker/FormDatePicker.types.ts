import { Control } from 'react-hook-form';
import { ProjectsFormValidationSchemaType } from '../../schemas/projectsFormValidation';

export interface FormDatePickerProps {
  label: string;
  name: 'beginning' | 'end';
  control: Control<ProjectsFormValidationSchemaType>;
  disabled: boolean;
  error: boolean;
}
