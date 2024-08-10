import { SyntheticEvent, useState } from 'react';
import { FormProvider, useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import theme from '../../theme';
import { initialContactInformationData } from '../ContactInformation/ContactInformation.constants';
import { initialProjectCardsData } from '../Projects/Projects.constants';
import { ProjectFormType } from '../ProjectForm/ProjectForm.types';
import { ContactInformationType } from '../ContactInformation/ContactInformation.types';
import { contactInformationValidation } from '../../schemas/contactInformationValidation';
import { projectsFormValidationSchema } from '../../schemas/projectsFormValidation';
import { BottomWrapper, FormWrapper, StyledTab, StyledTabs } from './App.styled';
import ContactInformation from '../ContactInformation/ContactInformation';
import Projects from '../Projects/Projects';

function App() {
  const [tabsValue, setTabsValue] = useState(0);
  const [projectNumber, setProjectNumber] = useState(1);
  const [contactDisabled, setContactDisabled] = useState(false);

  const handleChangeTab = (_event: SyntheticEvent, newValue: number) => {
    setTabsValue(newValue);
  };

  const contactInformationForm = useForm<ContactInformationType>({
    defaultValues: { ...initialContactInformationData },
    resolver: yupResolver(contactInformationValidation),
  });
  const { handleSubmit: handleContactSubmit, formState: contactState } = contactInformationForm;
  const { errors: contactError } = contactState;
  const contactSubmit: SubmitHandler<ContactInformationType> = () => {
    setContactDisabled(true);
  };

  const projectForm = useForm<ProjectFormType>({
    defaultValues: { ...initialProjectCardsData(projectNumber) },
    resolver: yupResolver(projectsFormValidationSchema),
  });
  const { control: projectControl, handleSubmit: handleProjectSubmit, formState: projectState } = projectForm;
  const { errors: projectError } = projectState;
  const projectSubmit: SubmitHandler<ProjectFormType> = () => {};

  const { append, fields, update, remove } = useFieldArray({
    control: projectControl,
    name: 'projectsArray',
  });

  const handleAddCard = () => {
    setProjectNumber((prev) => prev + 1);
    append({ ...initialProjectCardsData(projectNumber) });
  };

  const error = { contactError: !!Object.keys(contactError).length, projectError: !!Object.keys(projectError).length };

  const validateForms = () => {
    handleContactSubmit(contactSubmit)();
    handleProjectSubmit(projectSubmit)();
  };

  const inValidateForms = () => {
    setContactDisabled(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ margin: '16px', border: '1px solid primary.main', borderRadius: '4px' }}>
        <StyledTabs
          value={tabsValue}
          onChange={handleChangeTab}
          error={(error.contactError || error.projectError).toString()}
        >
          <StyledTab label="Контактная информация" error={error.contactError.toString()} />
          <StyledTab label="Проекты" error={error.projectError.toString()} />
        </StyledTabs>
        <FormWrapper>
          {tabsValue === 0 ? (
            <FormProvider {...contactInformationForm}>
              <ContactInformation contactDisabled={contactDisabled} />
            </FormProvider>
          ) : (
            <FormProvider {...projectForm}>
              <Projects
                fields={fields}
                update={update}
                remove={remove}
                contactDisabled={contactDisabled}
                handleAddCard={handleAddCard}
              />
            </FormProvider>
          )}
        </FormWrapper>
        <BottomWrapper>
          {contactDisabled ? (
            <Button variant="contained" onClick={() => inValidateForms()}>
              Редактировать
            </Button>
          ) : (
            <Button variant="contained" onClick={() => validateForms()}>
              Сохранить
            </Button>
          )}
        </BottomWrapper>
      </Box>
    </ThemeProvider>
  );
}

export default App;
