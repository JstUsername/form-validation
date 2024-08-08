export const initialProjectCardsData = (projectNumber: number) => {
  return {
    id: projectNumber,
    disabled: false,
    title: '',
    skills: [],
    role: '',
    beginning: new Date(),
    end: null,
  };
};
