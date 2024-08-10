import { FieldArrayWithId, FieldArray, UseFieldArrayRemove } from 'react-hook-form';
import { ProjectFormType } from '../ProjectForm/ProjectForm.types';

export interface ProjectsProps {
  fields: FieldArrayWithId<ProjectFormType>[];
  update: (index: number, value: FieldArray<ProjectFormType>) => void;
  remove: UseFieldArrayRemove;
  contactDisabled: boolean;
  handleAddCard: () => void;
}
