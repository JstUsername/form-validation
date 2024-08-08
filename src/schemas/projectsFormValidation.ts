import * as yup from 'yup';

export const projectsFormValidationSchema = yup.object().shape({
  id: yup.number().required(),
  disabled: yup.boolean().required(),
  title: yup.string().required('Заполните название проекта.'),
  skills: yup.array().of(yup.string().required()).min(1, 'Выберите хотя бы один навык.').required(),
  role: yup.string().required('Выберите роль на проекте.'),
  beginning: yup.date().required('Введите дату начала работы.').typeError('Введите дату в правильном формате.'),
  end: yup
    .date()
    .nullable()
    .min(yup.ref('beginning'), 'Дата окончания не может быть меньше даты начала')
    .typeError('Введите дату в правильном формате.'),
});
