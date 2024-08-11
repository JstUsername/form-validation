import { useFormContext } from 'react-hook-form';
import { ContactInformationValidationType } from '../../schemas/contactInformationValidation';
import { Typography, Box, FormControlLabel } from '@mui/material';
import { Form } from '../../commons/Form/Form';
import { FormBlockWrapper } from '../../commons/FormBlockWrapper/FormBlockWrapper';
import { FieldsWrapper } from '../../commons/FieldsWrapper/FieldsWrapper';
import { ErrorWrapper } from '../../commons/ErrorWrapper/ErrorWrapper';
import { ErrorMessage } from '../../commons/ErrorMessage/ErrorMessage';
import FormTextField from '../FormTextField/FormTextField';
import EmailPhoneField from '../EmailPhoneField/EmailPhoneField';
import FormCheckbox from '../FormCheckbox/FormCheckbox';

export default function ContactInformation({ contactDisabled }: { contactDisabled: boolean }) {
  const { control, formState } = useFormContext<ContactInformationValidationType>();
  const { errors } = formState;

  return (
    <Form>
      <FormBlockWrapper>
        <Typography variant="h6" sx={{ marginLeft: '2px' }}>
          Общая информация
        </Typography>
        <FieldsWrapper>
          <ErrorWrapper sx={{ gap: '8px' }}>
            <FormTextField
              required={true}
              autoComplete="given-name"
              id="surname"
              label="Фамилия"
              placeholder="Иванов"
              control={control}
              disabled={contactDisabled}
              error={!!errors.surname}
            />
            {typeof errors.surname?.message === 'string' && (
              <ErrorMessage variant="body1">{errors.surname.message}</ErrorMessage>
            )}
          </ErrorWrapper>
          <ErrorWrapper sx={{ gap: '8px' }}>
            <FormTextField
              required={true}
              autoComplete="family-name"
              id="name"
              label="Имя"
              placeholder="Иван"
              control={control}
              disabled={contactDisabled}
              error={!!errors.name}
            />
            {typeof errors.name?.message === 'string' && (
              <ErrorMessage variant="body1">{errors.name.message}</ErrorMessage>
            )}
          </ErrorWrapper>
          <ErrorWrapper sx={{ gap: '8px' }}>
            <FormTextField
              autoComplete="additional-name"
              id="patronymic"
              label="Отчество"
              placeholder="Иванович"
              control={control}
              disabled={contactDisabled}
              error={!!errors.patronymic}
            />
            {typeof errors.patronymic?.message === 'string' && (
              <ErrorMessage variant="body1">{errors.patronymic.message}</ErrorMessage>
            )}
          </ErrorWrapper>
        </FieldsWrapper>
      </FormBlockWrapper>
      <FormBlockWrapper>
        <Typography variant="h6" sx={{ marginLeft: '2px' }}>
          Контакты
        </Typography>
        <FieldsWrapper>
          <ErrorWrapper>
            <EmailPhoneField
              required={true}
              autoComplete="tel"
              id="phone"
              label="Телефон"
              control={control}
              disabled={contactDisabled}
              error={!!errors.phone}
            />
            {typeof errors.phone?.message === 'string' && (
              <ErrorMessage variant="body1">{errors.phone.message}</ErrorMessage>
            )}
          </ErrorWrapper>
          <ErrorWrapper>
            <EmailPhoneField
              id="email"
              autoComplete="email"
              label="E-mail"
              placeholder="example@domain.com"
              control={control}
              disabled={contactDisabled}
              error={!!errors.email}
            />
            {typeof errors.email?.message === 'string' && (
              <ErrorMessage variant="body1">{errors.email.message}</ErrorMessage>
            )}
          </ErrorWrapper>
        </FieldsWrapper>
      </FormBlockWrapper>
      <FormBlockWrapper>
        <Typography variant="h6" sx={{ marginLeft: '2px' }}>
          Другое
        </Typography>
        <ErrorWrapper sx={{ alignItems: 'flex-start' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FormControlLabel
              required
              control={<FormCheckbox id="activity" disabled={contactDisabled} />}
              label="За любой движ"
              sx={{ color: errors.activity ? 'error.main' : 'text.primary', margin: 0 }}
            />
          </Box>
          {typeof errors.activity?.message === 'string' && (
            <ErrorMessage variant="body1" sx={{ marginLeft: '12px' }}>
              {errors.activity.message}
            </ErrorMessage>
          )}
        </ErrorWrapper>
      </FormBlockWrapper>
    </Form>
  );
}
