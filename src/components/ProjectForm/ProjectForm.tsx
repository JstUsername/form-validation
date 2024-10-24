import { useFormContext } from 'react-hook-form';
import { Button, IconButton, Typography } from '@mui/material';
import { ProjectFormProps } from './ProjectForm.types';
import { ContactInformationValidationType } from '../../schemas/contactInformationValidation';
import { FormWrapper } from '../../commons/FormWrapper/FormWrapper';
import FormTextField from '../FormTextField/FormTextField';
import FormAutocomplete from '../FormAutocomplete/FormAutocomplete';
import FormSelect from '../FormSelect/FormSelect';
import FormDatePicker from '../FormDatePicker/FormDatePicker';
import { FormBlockWrapper } from '../../commons/FormBlockWrapper/FormBlockWrapper';
import { FieldsWrapper } from '../../commons/FieldsWrapper/FieldsWrapper';
import { DatePickerWrapper, HeaderWrapper } from './ProjectForm.styled';
import TrashIcon from '../../assets/trash-icon.svg?react';

const ProjectForm = ({ update, index, value, remove, contactDisabled }: ProjectFormProps) => {
  const { getValues, trigger } = useFormContext<ContactInformationValidationType>();
  const disabled = getValues(`projectsArray.${index}.disabled`);

  const ProjectSubmit = async () => {
    const result = await trigger(`projectsArray.${index}`);
    if (result) {
      const data = getValues(`projectsArray.${index}`);
      update(index, { ...data, disabled: true });
    }
  };

  const ProjectReset = () => {
    update(index, { ...value, disabled: false });
  };

  return (
    <FormWrapper sx={{ width: '100%', paddingBottom: 1.5 }}>
      <FormBlockWrapper>
        <HeaderWrapper>
          <Typography variant="h6">Проект №{value.number}</Typography>
          {!disabled && (
            <IconButton sx={{ marginX: -1, marginY: -1 }} onClick={() => remove(index)}>
              <TrashIcon />
            </IconButton>
          )}
        </HeaderWrapper>
        <FieldsWrapper sx={{ flexDirection: 'column', flexWrap: 'nowrap', gap: '12px' }}>
          <FormTextField
            required
            name={`projectsArray.${index}.title`}
            label="Название"
            placeholder="Название проекта"
            disabled={disabled}
            manualValidation
          />
          <FormAutocomplete name={`projectsArray.${index}.skills`} disabled={disabled} manualValidation />
          <FormSelect
            required
            name={`projectsArray.${index}.role`}
            label="Роль на проекте"
            disabled={disabled}
            items={['Разработчик', 'Тестировщик', 'Аналитик']}
            manualValidation
          />
          <DatePickerWrapper>
            <FormDatePicker
              label="Начало работы *"
              name={`projectsArray.${index}.beginning`}
              index={index}
              disabled={disabled}
              manualValidation
            />
            <FormDatePicker
              label="Окончание работы"
              name={`projectsArray.${index}.end`}
              index={index}
              disabled={disabled}
              manualValidation
            />
          </DatePickerWrapper>
        </FieldsWrapper>
        {disabled ? (
          <Button variant="contained" onClick={ProjectReset} disabled={contactDisabled} sx={{ marginLeft: 'auto' }}>
            Редактировать
          </Button>
        ) : (
          <Button variant="contained" onClick={ProjectSubmit} sx={{ marginLeft: 'auto' }}>
            Добавить
          </Button>
        )}
      </FormBlockWrapper>
    </FormWrapper>
  );
};

export default ProjectForm;
