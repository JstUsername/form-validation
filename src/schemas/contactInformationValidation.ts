import * as yup from 'yup';
import { projectsFormValidationSchema } from './projectsFormValidation';

export const contactInformationValidation = yup.object().shape({
  disabled: yup.boolean().required(),
  error: yup.boolean().required(),
  surname: yup
    .string()
    .matches(/^[А-Яа-яЁёA-Za-z]+$/, 'Введите только буквы.')
    .required('Введите фамилию.'),
  name: yup
    .string()
    .matches(/^[А-Яа-яЁёA-Za-z]+$/, 'Введите только буквы.')
    .required('Введите имя.'),
  patronymic: yup.string().matches(/^[А-Яа-яЁёA-Za-z]+$/, 'Введите только буквы.'),
  phone: yup
    .string()
    .matches(/^\+7\(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Введите корректный номер.')
    .required('Введите номер телефона.'),
  email: yup.string().email('Введите корректный email.'),
  activity: yup
    .boolean()
    .test('is-checked', 'Отметьте чекбокс.', (value) => value === true)
    .required(),
  projectsArray: yup.array(projectsFormValidationSchema).required().min(1, 'Добавьте минимум один проект.'),
});

export type ContactInformationValidationType = yup.InferType<typeof contactInformationValidation>;
