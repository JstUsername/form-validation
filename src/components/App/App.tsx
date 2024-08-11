import { SyntheticEvent, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import theme from '../../theme';
import { initialFormData } from '../../constants/initialFormData';
import {
  contactInformationValidation,
  ContactInformationValidationType,
} from '../../schemas/contactInformationValidation';
import { BottomWrapper, BodyWrapper, StyledTab, StyledTabs } from './App.styled';
import { ErrorMessage } from '../../commons/ErrorMessage/ErrorMessage';
import ContactInformation from '../ContactInformation/ContactInformation';
import Projects from '../Projects/Projects';

const App = () => {
  const [tabsValue, setTabsValue] = useState(0);
  const [contactDisabled, setContactDisabled] = useState(false);

  const contactInformationForm = useForm<ContactInformationValidationType>({
    defaultValues: { ...initialFormData },
    resolver: yupResolver(contactInformationValidation),
  });
  const { handleSubmit, formState, getValues, setValue } = contactInformationForm;
  const { errors } = formState;

  const onSubmit = () => {
    setContactDisabled(true);
    if (getValues('projectsArray').length) {
      for (let i = 0; i < getValues('projectsArray').length; i++) {
        setValue(`projectsArray.${i}.disabled`, true);
      }
    }
  };

  const { projectsArray, ...contactError } = errors;

  const error = {
    contactError: !!Object.keys(contactError).length,
    projectError: !!projectsArray && !!Object.keys(projectsArray).length,
  };

  const handleChangeTab = (_event: SyntheticEvent, newValue: number) => {
    setTabsValue(newValue);
  };

  const inValidateForms = () => {
    setContactDisabled(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormProvider {...contactInformationForm}>
        <Box sx={{ margin: '16px', border: '1px solid', borderColor: 'primary.main', borderRadius: '4px' }}>
          <StyledTabs
            value={tabsValue}
            onChange={handleChangeTab}
            error={(error.contactError || error.projectError).toString()}
          >
            <StyledTab label="Контактная информация" error={error.contactError.toString()} />
            <StyledTab label="Проекты" error={error.projectError.toString()} />
          </StyledTabs>
          <BodyWrapper>
            {tabsValue === 0 ? (
              <ContactInformation contactDisabled={contactDisabled} />
            ) : (
              <Projects contactDisabled={contactDisabled} />
            )}
          </BodyWrapper>
          <BottomWrapper>
            <ErrorMessage>{errors?.projectsArray?.message}</ErrorMessage>
            {contactDisabled ? (
              <Button variant="contained" sx={{ marginLeft: 'auto' }} onClick={() => inValidateForms()}>
                Редактировать
              </Button>
            ) : (
              <Button variant="contained" sx={{ marginLeft: 'auto' }} onClick={handleSubmit(onSubmit)}>
                Сохранить
              </Button>
            )}
          </BottomWrapper>
        </Box>
      </FormProvider>
    </ThemeProvider>
  );
};

export default App;
