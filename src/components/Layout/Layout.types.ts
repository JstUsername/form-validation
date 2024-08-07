import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface LayoutProps {
  children: ReactNode;
  tabsValue: number;
  setTabsValue: Dispatch<SetStateAction<number>>;
}
