import { useFormContext } from 'react-hook-form';
import { ContactInformationValidationType } from '../../schemas/contactInformationValidation';
import { Typography, Box } from '@mui/material';
import { FormWrapper } from '../../commons/FormWrapper/FormWrapper';
import { FormBlockWrapper } from '../../commons/FormBlockWrapper/FormBlockWrapper';
import { FieldsWrapper } from '../../commons/FieldsWrapper/FieldsWrapper';
import FormTextField from '../FormTextField/FormTextField';
import PhoneField from '../PhoneField/PhoneField';
import FormCheckbox from '../FormCheckbox/FormCheckbox';

const ContactInformation = ({ contactDisabled }: { contactDisabled: boolean }) => {
  const { control } = useFormContext<ContactInformationValidationType>();

  return (
    <form>
      <FormWrapper>
        <FormBlockWrapper>
          <Typography variant="h6">Общая информация</Typography>
          <FieldsWrapper>
            <FormTextField
              required
              autoComplete="given-name"
              name="surname"
              label="Фамилия"
              placeholder="Иванов"
              control={control}
              disabled={contactDisabled}
            />
            <FormTextField
              required
              autoComplete="family-name"
              name="name"
              label="Имя"
              placeholder="Иван"
              control={control}
              disabled={contactDisabled}
            />
            <FormTextField
              autoComplete="additional-name"
              name="patronymic"
              label="Отчество"
              placeholder="Иванович"
              control={control}
              disabled={contactDisabled}
            />
          </FieldsWrapper>
        </FormBlockWrapper>
        <FormBlockWrapper>
          <Typography variant="h6">Контакты</Typography>
          <FieldsWrapper>
            <PhoneField
              required
              autoComplete="tel"
              name="phone"
              label="Телефон"
              control={control}
              disabled={contactDisabled}
            />
            <FormTextField
              autoComplete="email"
              name="email"
              label="E-mail"
              placeholder="example@domain.com"
              control={control}
              disabled={contactDisabled}
            />
          </FieldsWrapper>
        </FormBlockWrapper>
        <FormBlockWrapper>
          <Typography variant="h6">Другое</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FormCheckbox name="activity" disabled={contactDisabled} label="За любой движ" />
          </Box>
        </FormBlockWrapper>
      </FormWrapper>
    </form>
  );
};

export default ContactInformation;
