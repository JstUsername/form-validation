import { FieldArrayWithId, UseFieldArrayUpdate, UseFieldArrayRemove } from 'react-hook-form';
import { ProjectsFormValidationSchemaType } from '../../schemas/projectsFormValidation';

export interface ProjectFormProps {
  update: UseFieldArrayUpdate<ProjectsFormValidationSchemaType>;
  index: number;
  value: FieldArrayWithId<ProjectsFormValidationSchemaType>;
  remove: UseFieldArrayRemove;
  contactDisabled: boolean;
}
