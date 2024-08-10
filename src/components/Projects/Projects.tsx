import { useFieldArray, useFormContext } from 'react-hook-form';
import { ContactInformationValidationType } from '../../schemas/contactInformationValidation';
import { ProjectsFormValidationSchemaType } from '../../schemas/projectsFormValidation';
import { initialProjectCardsData } from './Projects.constants';
import { ProjectsWrapper, AddCardButton } from './Projects.styled';
import ProjectForm from '../ProjectForm/ProjectForm';
import PlusIcon from '../../assets/plus-icon.svg?react';

export default function Projects({ contactDisabled }: { contactDisabled: boolean }) {
  const { watch } = useFormContext<ContactInformationValidationType>();
  const { append, fields, update, remove } = useFieldArray<ProjectsFormValidationSchemaType>({
    name: 'projectsArray',
  });

  const projectNumber = watch('projectsArray').length + 1;

  const handleAddCard = () => {
    append({ ...initialProjectCardsData, number: projectNumber });
  };

  return (
    <ProjectsWrapper>
      {fields?.map((card, index) => (
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
