import { ReactNode, Dispatch, SetStateAction } from 'react';
import { ContactInformationType, ErrorType } from '../ContactInformation/ContactInformation.types';

export interface LayoutProps {
  children: ReactNode;
  tabsValue: number;
  setTabsValue: Dispatch<SetStateAction<number>>;
  contactInformation: ContactInformationType;
  validateForms: () => void;
  error: ErrorType;
}
