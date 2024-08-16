import * as yup from 'yup';
import { projectsFormValidationSchema } from './projectsFormValidation';

export const contactInformationValidation = yup.object().shape({
  disabled: yup.boolean().required(),
  error: yup.boolean().required(),
  surname: yup
    .string()
    .required('Введите фамилию.')
    .matches(/^[А-Яа-яЁёA-Za-z]+$/, 'Введите только буквы.'),
  name: yup
    .string()
    .required('Введите имя.')
    .matches(/^[А-Яа-яЁёA-Za-z]+$/, 'Введите только буквы.'),
  patronymic: yup
    .string()
    .test('is-valid', 'Введите только буквы.', (value) => !value || /^[А-Яа-яЁёA-Za-z]+$/.test(value)),
  phone: yup
    .string()
    .required('Введите номер телефона.')
    .matches(/^\+7\(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Введите корректный номер.'),
  email: yup.string().email('Введите корректный email.'),
  activity: yup
    .boolean()
    .test('is-checked', 'Отметьте чекбокс.', (value) => value === true)
    .required(),
  projectsArray: yup.array(projectsFormValidationSchema).required().min(1, 'Добавьте минимум один проект.'),
});

export type ContactInformationValidationType = yup.InferType<typeof contactInformationValidation>;
