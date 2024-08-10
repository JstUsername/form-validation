import { ProjectsProps } from './Projects.types';
import { ProjectsWrapper, AddCardButton } from './Projects.styled';
import ProjectForm from '../ProjectForm/ProjectForm';
import PlusIcon from '../../assets/plus-icon.svg?react';

export default function Projects({ fields, update, remove, contactDisabled, handleAddCard }: ProjectsProps) {
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
