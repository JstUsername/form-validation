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
        <Button variant="contained" onClick={() => validateForms()}>
          {contactInformation.disabled ? 'Редактировать' : 'Сохранить'}
        </Button>
      </BottomWrapper>
    </LayoutWrapper>
  );
}
