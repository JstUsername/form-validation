import { SyntheticEvent } from 'react';
import { LayoutProps } from './Layout.types';
import { Button } from '@mui/material';
import { LayoutWrapper, StyledTabs, StyledTab, BottomWrapper, FormWrapper } from './Layout.styled';

export default function Layout({
  children,
  tabsValue,
  setTabsValue,
  contactInformation,
  validateForms,
  error,
  inValidateForms,
}: LayoutProps) {
  const handleChangeTab = (_event: SyntheticEvent, newValue: number) => {
    setTabsValue(newValue);
  };
  return (
    <LayoutWrapper>
      <StyledTabs
        value={tabsValue}
        onChange={handleChangeTab}
        error={(error.contactError || error.projectError).toString()}
      >
        <StyledTab label="Контактная информация" error={error.contactError.toString()} />
        <StyledTab label="Проекты" error={error.projectError.toString()} />
      </StyledTabs>
      <FormWrapper>{children}</FormWrapper>
      <BottomWrapper>
        {contactInformation.disabled ? (
          <Button variant="contained" onClick={() => inValidateForms()}>
            Редактировать
          </Button>
        ) : (
          <Button variant="contained" onClick={() => validateForms()}>
            Сохранить
          </Button>
        )}
      </BottomWrapper>
    </LayoutWrapper>
  );
}
