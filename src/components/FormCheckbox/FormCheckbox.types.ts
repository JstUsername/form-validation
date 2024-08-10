import { Control } from 'react-hook-form';
import { ContactInformationValidationType } from '../../schemas/contactInformationValidation';

export interface FormCheckboxProps {
  id: 'activity';
  control: Control<ContactInformationValidationType>;
  disabled: boolean;
}
