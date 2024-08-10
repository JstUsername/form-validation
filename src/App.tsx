import { useState } from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { initialContactInformationData } from './components/ContactInformation/ContactInformation.constants';
import { initialProjectCardsData } from './components/Projects/Projects.constants';
import { ProjectFormType } from './components/ProjectForm/ProjectForm.types';
import { ContactInformationType } from './components/ContactInformation/ContactInformation.types';
import { contactInformationValidation } from './schemas/contactInformationValidation';
import { projectsFormValidationSchema } from './schemas/projectsFormValidation';
import Layout from './components/Layout/Layout';
import ContactInformation from './components/ContactInformation/ContactInformation';
import Projects from './components/Projects/Projects';

function App() {
  const [tabsValue, setTabsValue] = useState(0);
  const [projectNumber, setProjectNumber] = useState(1);
  const [contactDisabled, setContactDisabled] = useState(false);

  const contactInformationForm = useForm<ContactInformationType>({
    defaultValues: { ...initialContactInformationData },
    resolver: yupResolver(contactInformationValidation),
  });
  const { handleSubmit: handleContactSubmit, formState: contactFormState } = contactInformationForm;
  const { errors: contactError } = contactFormState;
  const contactSubmit: SubmitHandler<ContactInformationType> = () => {
    setContactDisabled(true);
  };

  const projectForm = useForm<ProjectFormType>({
    defaultValues: { ...initialProjectCardsData(projectNumber) },
    resolver: yupResolver(projectsFormValidationSchema),
  });
  const { formState: contactProjectState, handleSubmit: handleProjectSubmit } = projectForm;
  const { errors: projectError } = contactProjectState;
  const projectSubmit: SubmitHandler<ProjectFormType> = () => {};

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
      <Layout
        tabsValue={tabsValue}
        setTabsValue={setTabsValue}
        error={error}
        contactDisabled={contactDisabled}
        validateForms={validateForms}
        inValidateForms={inValidateForms}
      >
        {tabsValue === 0 ? (
          <FormProvider {...contactInformationForm}>
            <ContactInformation contactDisabled={contactDisabled} />
          </FormProvider>
        ) : (
          <FormProvider {...projectForm}>
            <Projects
              projectNumber={projectNumber}
              setProjectNumber={setProjectNumber}
              contactDisabled={contactDisabled}
            />
          </FormProvider>
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
