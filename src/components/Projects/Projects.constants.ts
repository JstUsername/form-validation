export const initialProjectCardsData = (projectNumber: number) => {
  return {
    number: projectNumber,
    disabled: false,
    title: '',
    skills: [],
    role: '',
    beginning: new Date(),
    end: null,
  };
};
