import { useState, useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { initialContactInformationData } from './components/ContactInformation/ContactInformation.constants';
import { ErrorType, ContactInformationHandle } from './components/ContactInformation/ContactInformation.types';
import { ProjectFormType, ProjectFormHandle } from './components/ProjectForm/ProjectForm.types';
import Layout from './components/Layout/Layout';
import ContactInformation from './components/ContactInformation/ContactInformation';
import Projects from './components/Projects/Projects';

function App() {
  const [tabsValue, setTabsValue] = useState(0);
  const [contactInformation, setContactInformation] = useState(initialContactInformationData);
  const [projectCards, setProjectCards] = useState<ProjectFormType[]>([]);
  const [projectNumber, setProjectNumber] = useState(1);
  const [error, setError] = useState<ErrorType>({ contactError: false, projectError: false });
  const contactInformationRef = useRef<ContactInformationHandle>(null);
  const projectFormRef = useRef<ProjectFormHandle[]>([]);

  const contactValidation = () => {
    if (contactInformationRef.current) {
      contactInformationRef.current.contactValidate();
    }
  };

  const projectValidation = () => {
    projectFormRef.current.forEach((ref) => {
      if (ref) {
        ref.projectValidate();
      }
    });
  };

  const validateForms = () => {
    projectValidation();
    contactValidation();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout
        tabsValue={tabsValue}
        setTabsValue={setTabsValue}
        contactInformation={contactInformation}
        validateForms={validateForms}
        error={error}
      >
        {tabsValue === 0 ? (
          <ContactInformation
            contactInformation={contactInformation}
            setContactInformation={setContactInformation}
            setError={setError}
            ref={contactInformationRef}
          />
        ) : (
          <Projects
            projectCards={projectCards}
            setProjectCards={setProjectCards}
            projectNumber={projectNumber}
            setProjectNumber={setProjectNumber}
            setError={setError}
            projectFormRef={projectFormRef}
            contactInformation={contactInformation}
          />
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
