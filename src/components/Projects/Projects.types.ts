import { Dispatch, SetStateAction } from 'react';

export interface ProjectsProps {
  projectNumber: number;
  setProjectNumber: Dispatch<SetStateAction<number>>;
  contactDisabled: boolean;
}
