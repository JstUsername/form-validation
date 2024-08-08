import { Control } from 'react-hook-form';
import { ContactInformationType } from '../ContactInformation/ContactInformation.types';

export interface FormCheckboxProps {
  id: 'activity';
  control: Control<ContactInformationType>;
  disabled: boolean;
}
