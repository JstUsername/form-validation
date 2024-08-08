import { useCallback } from 'react';
import { ProjectsProps } from './Projects.types';
import { initialProjectCardsData } from './Projects.constants';
import { ProjectsWrapper, AddCardButton } from './Projects.styled';
import ProjectForm from '../ProjectForm/ProjectForm';
import PlusIcon from '../../assets/plus-icon.svg?react';

export default function Projects({
  projectCards,
  setProjectCards,
  projectNumber,
  setProjectNumber,
  setError,
  projectFormRef,
  contactInformation,
}: ProjectsProps) {
  const handleAddCard = useCallback(() => {
    setProjectCards((prev) => {
      return [...prev, initialProjectCardsData(projectNumber)];
    });
    setProjectNumber((prev) => prev + 1);
  }, [setProjectCards, setProjectNumber, projectNumber]);

  const handleDeleteCard = useCallback(
    (id: number) => {
      setProjectCards((prev) => {
        return prev.filter((card) => card.id !== id);
      });
    },
    [setProjectCards],
  );

  return (
    <ProjectsWrapper>
      {!!projectCards.length &&
        projectCards.map((card, index) => {
          return (
            <ProjectForm
              key={card.id}
              card={card}
              handleDeleteCard={handleDeleteCard}
              setProjectCards={setProjectCards}
              setError={setError}
              contactInformation={contactInformation}
              ref={(el) => {
                if (el && projectFormRef.current[index] !== el) {
                  projectFormRef.current[index] = el;
                }
              }}
            />
          );
        })}
      <AddCardButton variant="contained" disabled={contactInformation.disabled} onClick={() => handleAddCard()}>
        <PlusIcon />
      </AddCardButton>
    </ProjectsWrapper>
  );
}
