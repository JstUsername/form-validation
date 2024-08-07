import { useState } from 'react';
import { ProjectCardsType } from './components/Projects/Projects.types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Layout from './components/Layout/Layout';
import ContactInformation from './components/ContactInformation/ContactInformation';
import Projects from './components/Projects/Projects';

function App() {
  const [tabsValue, setTabsValue] = useState(0);
  const [projectCards, setProjectCards] = useState<ProjectCardsType[]>([]);
  const [projectNumber, setProjectNumber] = useState(1);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout tabsValue={tabsValue} setTabsValue={setTabsValue}>
        {tabsValue === 0 ? (
          <ContactInformation />
        ) : (
          <Projects
            projectCards={projectCards}
            setProjectCards={setProjectCards}
            projectNumber={projectNumber}
            setProjectNumber={setProjectNumber}
          />
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
