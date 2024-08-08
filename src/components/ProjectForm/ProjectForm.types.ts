import { Dispatch, SetStateAction } from 'react';
import { ErrorType } from '../ContactInformation/ContactInformation.types';

export interface ProjectFormProps {
  card: ProjectFormType;
  handleDeleteCard: (id: number) => void;
  setProjectCards: Dispatch<SetStateAction<ProjectFormType[]>>;
  setError: Dispatch<SetStateAction<ErrorType>>;
}

export interface ProjectFormType {
  id: number;
  disabled: boolean;
  title: string;
  skills: string[];
  role: string;
  beginning: Date;
  end?: Date | null;
}

export interface ProjectFormHandle {
  projectValidate: () => void;
}
