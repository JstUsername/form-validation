import * as yup from 'yup';

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
});
