import { ProjectsFormValidationSchemaType } from '../../schemas/projectsFormValidation';
import { Control } from 'react-hook-form';

export interface FormSelectProps {
  required?: boolean;
  id: string;
  label: string;
  control: Control<ProjectsFormValidationSchemaType>;
  disabled: boolean;
  error: boolean;
}
