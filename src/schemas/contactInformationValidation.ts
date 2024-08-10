import * as yup from 'yup';
import { projectsFormValidationSchema } from './projectsFormValidation';

export const contactInformationValidation = yup.object().shape({
  disabled: yup.boolean().required(),
  error: yup.boolean().required(),
  surname: yup.string().required('Введите фамилию.'),
  name: yup.string().required('Введите имя.'),
  patronymic: yup.string(),
  phone: yup.string().required('Введите номер телефона.'),
  email: yup.string().email('Введите корректный email.'),
  activity: yup
    .boolean()
    .test('is-checked', 'Отметьте чекбокс.', (value) => value === true)
    .required(),
  projectsArray: yup.array(projectsFormValidationSchema).required().min(1, 'Добавьте минимум один проект.'),
});

export type ContactInformationValidationType = yup.InferType<typeof contactInformationValidation>;
