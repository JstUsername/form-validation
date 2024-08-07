import { ProjectsProps } from './Projects.types';
import { initialProjectCardsData } from './Projects.constants';
import { ProjectsWrapper, AddCardButton, DatePickerWrapper, HeaderWrapper } from './Projects.styled';
import { Form } from '../../commons/Form/Form';
import { FormBlockWrapper } from '../../commons/FormBlockWrapper/FormBlockWrapper';
import { FieldsWrapper } from '../../commons/FieldsWrapper/FieldsWrapper';
import { Button, IconButton, Typography } from '@mui/material';
import PlusIcon from '../../assets/plus-icon.svg?react';
import TrashIcon from '../../assets/trash-icon.svg?react';
import CustomTextField from '../CustomTextField/CustomTextField';
import CustomAutocomplete from '../CustomAutocomplete/CustomAutocomplete';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';
import CustomSelect from '../CustomSelect/CustomSelect';

export default function Projects({ projectCards, setProjectCards, projectNumber, setProjectNumber }: ProjectsProps) {
  const handleAddCard = () => {
    setProjectCards((prev) => {
      return [...prev, initialProjectCardsData(projectNumber)];
    });
    setProjectNumber((prev) => prev + 1);
  };

  const handleDeleteCard = (id: number) => {
    setProjectCards((prev) => {
      return prev.filter((card) => card.id !== id);
    });
  };

  return (
    <ProjectsWrapper>
      {!!projectCards.length &&
        projectCards.map((card) => {
          return (
            <Form key={card.id} sx={{ width: '100%', paddingBottom: '12px' }}>
              <FormBlockWrapper>
                <HeaderWrapper>
                  <Typography variant="h6" sx={{ marginLeft: '2px' }}>
                    Проект №{card.id}
                  </Typography>
                  <IconButton sx={{ marginX: '-8px', marginY: '-8px' }} onClick={() => handleDeleteCard(card.id)}>
                    <TrashIcon />
                  </IconButton>
                </HeaderWrapper>
                <FieldsWrapper sx={{ flexDirection: 'column', flexWrap: 'nowrap', gap: '12px' }}>
                  <CustomTextField
                    required={true}
                    id="project-name-input"
                    label="Название"
                    placeholder="Название проекта"
                  />
                  <CustomAutocomplete />
                  <CustomSelect required={true} id="role-input" label="Роль на проекте" />
                  <DatePickerWrapper>
                    <CustomDatePicker label="Начало работы *" />
                    <CustomDatePicker label="Окончание работы" />
                  </DatePickerWrapper>
                </FieldsWrapper>
                <Button variant="contained" sx={{ marginLeft: 'auto' }}>
                  Добавить
                </Button>
              </FormBlockWrapper>
            </Form>
          );
        })}
      <AddCardButton variant="contained" onClick={() => handleAddCard()}>
        <PlusIcon />
      </AddCardButton>
    </ProjectsWrapper>
  );
}
