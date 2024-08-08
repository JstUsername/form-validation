import { ProjectsProps } from './Projects.types';
import { initialProjectCardsData } from './Projects.constants';
import { ProjectsWrapper, AddCardButton } from './Projects.styled';
import ProjectForm from '../ProjectForm/ProjectForm';
import PlusIcon from '../../assets/plus-icon.svg?react';
import { useCallback } from 'react';

export default function Projects({
  projectCards,
  setProjectCards,
  projectNumber,
  setProjectNumber,
  setError,
  projectFormRef,
}: ProjectsProps) {
  const handleAddCard = () => {
    setProjectCards((prev) => {
      return [...prev, initialProjectCardsData(projectNumber)];
    });
    setProjectNumber((prev) => prev + 1);
  };

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
              ref={(el) => {
                if (el && projectFormRef.current[index] !== el) {
                  projectFormRef.current[index] = el;
                }
              }}
            />
          );
        })}
      <AddCardButton variant="contained" onClick={() => handleAddCard()}>
        <PlusIcon />
      </AddCardButton>
    </ProjectsWrapper>
  );
}
