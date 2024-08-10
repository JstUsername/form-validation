import { SubmitHandler, useForm, useFormContext } from 'react-hook-form';
import { Button, IconButton, Typography } from '@mui/material';
import { projectsFormValidationSchema, ProjectsFormValidationSchemaType } from '../../schemas/projectsFormValidation';
import { ProjectFormProps } from './ProjectForm.types';
import { ContactInformationValidationType } from '../../schemas/contactInformationValidation';
import FormTextField from '../FormTextField/FormTextField';
import FormAutocomplete from '../FormAutocomplete/FormAutocomplete';
import FormSelect from '../FormSelect/FormSelect';
import FormDatePicker from '../FormDatePicker/FormDatePicker';
import { Form } from '../../commons/Form/Form';
import { FormBlockWrapper } from '../../commons/FormBlockWrapper/FormBlockWrapper';
import { FieldsWrapper } from '../../commons/FieldsWrapper/FieldsWrapper';
import { DatePickerWrapper, HeaderWrapper } from './ProjectForm.styled';
import { ErrorWrapper } from '../../commons/ErrorWrapper/ErrorWrapper';
import { ErrorMessage } from '../../commons/ErrorMessage/ErrorMessage';
import TrashIcon from '../../assets/trash-icon.svg?react';
import { yupResolver } from '@hookform/resolvers/yup';

export default function ProjectForm({ update, index, value, remove, contactDisabled }: ProjectFormProps) {
  const { formState: globalFormState, clearErrors, getValues } = useFormContext<ContactInformationValidationType>();
  const {
    control,
    formState: localFormState,
    handleSubmit,
  } = useForm<ProjectsFormValidationSchemaType>({
    defaultValues: value,
    resolver: yupResolver(projectsFormValidationSchema),
  });
  const { errors: globalErrors } = globalFormState;
  const { errors: localErrors } = localFormState;
  const errors = globalErrors?.projectsArray ? globalErrors.projectsArray[index] : localErrors;

  const disabled = !!getValues(`projectsArray.${index}.disabled`) && getValues(`projectsArray.${index}.disabled`);

  const onSubmit: SubmitHandler<ProjectsFormValidationSchemaType> = (data) => {
    update(index, { ...data, disabled: true });
    clearErrors(`projectsArray.${index}`);
  };

  return (
    <Form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      onReset={() => update(index, { ...value, disabled: false })}
      sx={{ width: '100%', paddingBottom: '12px' }}
    >
      <FormBlockWrapper>
        <HeaderWrapper>
          <Typography variant="h6" sx={{ marginLeft: '2px' }}>
            Проект №{value.number}
          </Typography>
          {!disabled && (
            <IconButton sx={{ marginX: '-8px', marginY: '-8px' }} onClick={() => remove(index)}>
              <TrashIcon />
            </IconButton>
          )}
        </HeaderWrapper>
        <FieldsWrapper sx={{ flexDirection: 'column', flexWrap: 'nowrap', gap: '12px' }}>
          <ErrorWrapper>
            <FormTextField
              required={true}
              id="title"
              label="Название"
              placeholder="Название проекта"
              control={control}
              disabled={disabled}
              error={!!errors.title}
            />
            {errors.title && <ErrorMessage variant="body1">{errors.title.message}</ErrorMessage>}
          </ErrorWrapper>
          <ErrorWrapper>
            <FormAutocomplete control={control} disabled={disabled} error={!!errors.skills} />
            {errors.skills && <ErrorMessage variant="body1">{errors.skills.message}</ErrorMessage>}
          </ErrorWrapper>
          <ErrorWrapper>
            <FormSelect
              required={true}
              id="role-input"
              label="Роль на проекте"
              control={control}
              disabled={disabled}
              error={!!errors.role}
            />
            {errors.role && <ErrorMessage variant="body1">{errors.role.message}</ErrorMessage>}
          </ErrorWrapper>
          <DatePickerWrapper>
            <ErrorWrapper sx={{ flex: 1 }}>
              <FormDatePicker
                label="Начало работы *"
                name="beginning"
                control={control}
                disabled={disabled}
                error={!!errors.beginning}
              />
              {errors.beginning && <ErrorMessage variant="body1">{errors.beginning.message}</ErrorMessage>}
            </ErrorWrapper>
            <ErrorWrapper sx={{ flex: 1 }}>
              <FormDatePicker
                label="Окончание работы"
                name="end"
                control={control}
                disabled={disabled}
                error={!!errors.end}
              />
              {errors.end && <ErrorMessage variant="body1">{errors.end.message}</ErrorMessage>}
            </ErrorWrapper>
          </DatePickerWrapper>
        </FieldsWrapper>
        {disabled ? (
          <Button variant="contained" type="reset" disabled={contactDisabled} sx={{ marginLeft: 'auto' }}>
            Редактировать
          </Button>
        ) : (
          <Button type="submit" variant="contained" sx={{ marginLeft: 'auto' }}>
            Добавить
          </Button>
        )}
      </FormBlockWrapper>
    </Form>
  );
}
