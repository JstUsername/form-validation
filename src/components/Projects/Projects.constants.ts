import { ProjectsFormValidationSchemaType } from '../../schemas/projectsFormValidation';

export const initialProjectCardsData: ProjectsFormValidationSchemaType = {
  number: 0,
  disabled: false,
  title: '',
  skills: [],
  role: '',
  beginning: new Date(),
  end: null,
};
