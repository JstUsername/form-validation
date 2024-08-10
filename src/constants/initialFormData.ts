import { ContactInformationValidationType } from '../schemas/contactInformationValidation';

export const initialFormData: ContactInformationValidationType = {
  disabled: false,
  error: false,
  surname: '',
  name: '',
  patronymic: '',
  phone: '',
  email: '',
  activity: false,
  projectsArray: [],
};
