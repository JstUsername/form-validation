import { Dispatch, SetStateAction } from 'react';

export interface ProjectCardsType {
  id: number;
  title: string;
  skills: string;
  role: string;
  beginning: string;
  end: string;
}

export interface ProjectsProps {
  projectCards: ProjectCardsType[];
  setProjectCards: Dispatch<SetStateAction<ProjectCardsType[]>>;
  projectNumber: number;
  setProjectNumber: Dispatch<SetStateAction<number>>;
}
