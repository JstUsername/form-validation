import { useState } from 'react';
import { FormProvider, useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
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
              fields={fields}
              update={update}
              remove={remove}
              contactDisabled={contactDisabled}
              handleAddCard={handleAddCard}
            />
          </FormProvider>
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
