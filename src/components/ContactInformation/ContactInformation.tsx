import { useFormContext } from 'react-hook-form';
import { ContactInformationValidationType } from '../../schemas/contactInformationValidation';
import { Typography, Box } from '@mui/material';
import { FormWrapper } from '../../commons/FormWrapper/FormWrapper';
import { FormBlockWrapper } from '../../commons/FormBlockWrapper/FormBlockWrapper';
import { FieldsWrapper } from '../../commons/FieldsWrapper/FieldsWrapper';
import FormTextField from '../FormTextField/FormTextField';
import EmailPhoneField from '../EmailPhoneField/EmailPhoneField';
import FormCheckbox from '../FormCheckbox/FormCheckbox';

export default function ContactInformation({ contactDisabled }: { contactDisabled: boolean }) {
  const { control } = useFormContext<ContactInformationValidationType>();

  return (
    <form>
      <FormWrapper>
        <FormBlockWrapper>
          <Typography variant="h6" sx={{ marginLeft: '2px' }}>
            Общая информация
          </Typography>
          <FieldsWrapper>
            <FormTextField
              required={true}
              autoComplete="given-name"
              name="surname"
              label="Фамилия"
              placeholder="Иванов"
              control={control}
              disabled={contactDisabled}
            />
            <FormTextField
              required={true}
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
          <Typography variant="h6" sx={{ marginLeft: '2px' }}>
            Контакты
          </Typography>
          <FieldsWrapper>
            <EmailPhoneField
              required={true}
              autoComplete="tel"
              name="phone"
              label="Телефон"
              control={control}
              disabled={contactDisabled}
            />
            <EmailPhoneField
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
          <Typography variant="h6" sx={{ marginLeft: '2px' }}>
            Другое
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FormCheckbox name="activity" disabled={contactDisabled} />
          </Box>
        </FormBlockWrapper>
      </FormWrapper>
    </form>
  );
}
