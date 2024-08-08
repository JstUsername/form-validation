import { forwardRef, useImperativeHandle } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, IconButton, Typography } from '@mui/material';
import { projectsFormValidationSchema } from '../../schemas/projectsFormValidation';
import { ProjectFormProps, ProjectFormType, ProjectFormHandle } from './ProjectForm.types';
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

const ProjectForm = forwardRef<ProjectFormHandle, ProjectFormProps>(
  ({ card, handleDeleteCard, setProjectCards, setError, contactInformation }, ref) => {
    const projectsForm = useForm<ProjectFormType>({
      defaultValues: { ...card },
      resolver: yupResolver(projectsFormValidationSchema),
    });

    const { control, handleSubmit, formState, trigger } = projectsForm;
    const { errors } = formState;

    const submit: SubmitHandler<ProjectFormType> = (data) => {
      setProjectCards((prev) => {
        return prev.map((card) => {
          if (card.id === data.id) {
            return { ...data, disabled: true };
          }
          return card;
        });
      });
      setError((prev) => ({ ...prev, projectError: false }));
    };

    const validateAndSubmit = async () => {
      const isValid = await trigger();
      if (isValid) {
        await handleSubmit(submit)();
      } else {
        setError((prev) => ({ ...prev, projectError: true }));
      }
    };

    const inValidate = (id: number) => {
      setProjectCards((prev) => {
        return prev.map((card) => {
          if (card.id === id) {
            return { ...card, disabled: false };
          }
          return card;
        });
      });
    };

    useImperativeHandle(ref, () => ({
      projectValidate: validateAndSubmit,
    }));

    return (
      <Form
        noValidate
        onSubmit={handleSubmit(submit)}
        onReset={() => inValidate(card.id)}
        sx={{ width: '100%', paddingBottom: '12px' }}
      >
        <FormBlockWrapper>
          <HeaderWrapper>
            <Typography variant="h6" sx={{ marginLeft: '2px' }}>
              Проект №{card.id}
            </Typography>
            {!card.disabled && (
              <IconButton sx={{ marginX: '-8px', marginY: '-8px' }} onClick={() => handleDeleteCard(card.id)}>
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
                disabled={card.disabled}
                error={!!errors.title}
              />
              {errors.title && <ErrorMessage variant="body1">{errors.title.message}</ErrorMessage>}
            </ErrorWrapper>
            <ErrorWrapper>
              <FormAutocomplete control={control} disabled={card.disabled} error={!!errors.skills} />
              {errors.skills && <ErrorMessage variant="body1">{errors.skills.message}</ErrorMessage>}
            </ErrorWrapper>
            <ErrorWrapper>
              <FormSelect
                required={true}
                id="role-input"
                label="Роль на проекте"
                control={control}
                disabled={card.disabled}
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
                  disabled={card.disabled}
                  error={!!errors.beginning}
                />
                {errors.beginning && <ErrorMessage variant="body1">{errors.beginning.message}</ErrorMessage>}
              </ErrorWrapper>
              <ErrorWrapper sx={{ flex: 1 }}>
                <FormDatePicker
                  label="Окончание работы"
                  name="end"
                  control={control}
                  disabled={card.disabled}
                  error={!!errors.end}
                />
                {errors.end && <ErrorMessage variant="body1">{errors.end.message}</ErrorMessage>}
              </ErrorWrapper>
            </DatePickerWrapper>
          </FieldsWrapper>
          {card.disabled ? (
            <Button variant="contained" type="reset" disabled={contactInformation.disabled} sx={{ marginLeft: 'auto' }}>
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
  },
);

ProjectForm.displayName = 'ProjectForm';
export default ProjectForm;
