import { UseFieldArrayRemove } from 'react-hook-form';
import { ProjectsFormValidationSchemaType } from '../../schemas/projectsFormValidation';

export interface ProjectFormProps {
  update: Function;
  index: number;
  value: ProjectsFormValidationSchemaType;
  remove: UseFieldArrayRemove;
  contactDisabled: boolean;
}
