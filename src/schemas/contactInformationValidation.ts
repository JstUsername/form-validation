import { object, boolean, string, array, InferType } from 'yup';

import { projectsFormValidationSchema } from './projectsFormValidation';

export const contactInformationValidation = object().shape({
  disabled: boolean().required(),
  error: boolean().required(),
  surname: string()
    .required('Введите фамилию.')
    .matches(/^[А-Яа-яЁёA-Za-z]+$/, 'Введите только буквы.'),
  name: string()
    .required('Введите имя.')
    .matches(/^[А-Яа-яЁёA-Za-z]+$/, 'Введите только буквы.'),
  patronymic: string().test(
    'is-valid',
    'Введите только буквы.',
    (value) => !value || /^[А-Яа-яЁёA-Za-z]+$/.test(value),
  ),
  phone: string()
    .required('Введите номер телефона.')
    .matches(/^\+7\(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Введите корректный номер.'),
  email: string().email('Введите корректный email.'),
  activity: boolean()
    .test('is-checked', 'Отметьте чекбокс.', (value) => value === true)
    .required(),
  projectsArray: array(projectsFormValidationSchema).required().min(1, 'Добавьте минимум один проект.'),
});

export type ContactInformationValidationType = InferType<typeof contactInformationValidation>;
