import { Dispatch, SetStateAction, MutableRefObject } from 'react';
import { ProjectFormHandle, ProjectFormType } from '../ProjectForm/ProjectForm.types';
import { ErrorType } from '../ContactInformation/ContactInformation.types';

export interface ProjectsProps {
  projectCards: ProjectFormType[];
  setProjectCards: Dispatch<SetStateAction<ProjectFormType[]>>;
  projectNumber: number;
  setProjectNumber: Dispatch<SetStateAction<number>>;
  setError: Dispatch<SetStateAction<ErrorType>>;
  projectFormRef: MutableRefObject<ProjectFormHandle[]>;
}
