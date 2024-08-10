import { ReactNode, Dispatch, SetStateAction } from 'react';
import { ErrorType } from '../ContactInformation/ContactInformation.types';

export interface LayoutProps {
  children: ReactNode;
  tabsValue: number;
  setTabsValue: Dispatch<SetStateAction<number>>;
  contactDisabled: boolean;
  validateForms: () => void;
  error: ErrorType;
  inValidateForms: () => void;
}
