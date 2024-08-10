import { useFormContext, useFieldArray } from 'react-hook-form';
import { ProjectsProps } from './Projects.types';
import { initialProjectCardsData } from './Projects.constants';
import { ProjectsWrapper, AddCardButton } from './Projects.styled';
import ProjectForm from '../ProjectForm/ProjectForm';
import PlusIcon from '../../assets/plus-icon.svg?react';

export default function Projects({ projectNumber, setProjectNumber, contactDisabled }: ProjectsProps) {
  const { control } = useFormContext();
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: 'projectsArray',
  });

  const handleAddCard = () => {
    setProjectNumber((prev) => prev + 1);
    append({ ...initialProjectCardsData(projectNumber) });
  };

  return (
    <ProjectsWrapper>
      {!!fields.length &&
        fields.map((card, index) => (
          <ProjectForm
            key={card.id}
            update={update}
            index={index}
            value={card}
            remove={remove}
            contactDisabled={contactDisabled}
          />
        ))}
      <AddCardButton variant="contained" disabled={contactDisabled} onClick={() => handleAddCard()}>
        <PlusIcon />
      </AddCardButton>
    </ProjectsWrapper>
  );
}
