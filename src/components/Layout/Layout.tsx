import { SyntheticEvent } from 'react';
import { LayoutProps } from './Layout.types';
import { Tabs, Button } from '@mui/material';
import { LayoutWrapper, StyledTab, BottomWrapper, FormWrapper } from './Layout.styled';

export default function Layout({ children, tabsValue, setTabsValue }: LayoutProps) {
  const handleChangeTab = (_event: SyntheticEvent, newValue: number) => {
    setTabsValue(newValue);
  };

  return (
    <LayoutWrapper>
      <Tabs value={tabsValue} onChange={handleChangeTab} sx={{ minHeight: '42px' }}>
        <StyledTab label="Контактная информация" />
        <StyledTab label="Проекты" />
      </Tabs>
      <FormWrapper>{children}</FormWrapper>
      <BottomWrapper>
        <Button variant="contained">Сохранить</Button>
      </BottomWrapper>
    </LayoutWrapper>
  );
}
