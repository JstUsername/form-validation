import { Typography, Box } from '@mui/material';
import { FormWrapper } from '../../commons/FormWrapper/FormWrapper';
import { FormBlockWrapper } from '../../commons/FormBlockWrapper/FormBlockWrapper';
import { FieldsWrapper } from '../../commons/FieldsWrapper/FieldsWrapper';
import FormTextField from '../FormTextField/FormTextField';
import PhoneField from '../PhoneField/PhoneField';
import FormCheckbox from '../FormCheckbox/FormCheckbox';

const ContactInformation = ({ contactDisabled }: { contactDisabled: boolean }) => {
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
              disabled={contactDisabled}
            />
            <FormTextField
              required
              autoComplete="family-name"
              name="name"
              label="Имя"
              placeholder="Иван"
              disabled={contactDisabled}
            />
            <FormTextField
              autoComplete="additional-name"
              name="patronymic"
              label="Отчество"
              placeholder="Иванович"
              disabled={contactDisabled}
            />
          </FieldsWrapper>
        </FormBlockWrapper>
        <FormBlockWrapper>
          <Typography variant="h6">Контакты</Typography>
          <FieldsWrapper>
            <PhoneField required autoComplete="tel" name="phone" label="Телефон" disabled={contactDisabled} />
            <FormTextField
              autoComplete="email"
              name="email"
              label="E-mail"
              placeholder="example@domain.com"
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
