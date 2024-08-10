import { FieldArray } from 'react-hook-form';

export interface ProjectFormProps {
  contactDisabled: boolean;
  update: (index: number, value: FieldArray<ProjectFormType>) => void;
  index: number;
  value: ProjectFormType;
  remove: (index: number) => void;
}

export interface ProjectFormType {
  number: number;
  disabled: boolean;
  title: string;
  skills: string[];
  role: string;
  beginning: Date;
  end?: Date | null;
}
