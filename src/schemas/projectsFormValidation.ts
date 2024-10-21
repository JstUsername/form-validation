import { object, string, array, boolean, ref, date, number, InferType } from 'yup';

export const projectsFormValidationSchema = object().shape({
  number: number().required(),
  disabled: boolean().required(),
  title: string().required('Заполните название проекта.'),
  skills: array()
    .of(string().required())
    .min(1, 'Выберите хотя бы один навык.')
    .required('Выберите хотя бы один навык.'),
  role: string().required('Выберите роль на проекте.'),
  beginning: date()
    .required('Введите дату начала работы.')
    .typeError('Введите дату в правильном формате.')
    .test('max-date', 'Дата начала не может быть больше даты окончания.', function (value) {
      const { end } = this.parent;
      return end === null || value === null || value <= end;
    }),
  end: date()
    .nullable()
    .min(ref('beginning'), 'Дата окончания не может быть меньше даты начала.')
    .typeError('Введите дату в правильном формате.'),
});

export type ProjectsFormValidationSchemaType = InferType<typeof projectsFormValidationSchema>;
