import { Control } from 'react-hook-form';
import { ProjectsFormValidationSchemaType } from '../../schemas/projectsFormValidation';

export interface FormAutocompleteProps {
  control: Control<ProjectsFormValidationSchemaType>;
  disabled: boolean;
  error: boolean;
}
