import { forwardRef, useImperativeHandle } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography, Box, FormControlLabel } from '@mui/material';
import { ContactInformationProps, ContactInformationType, ContactInformationHandle } from './ContactInformation.types';
import { contactInformationValidation } from '../../schemas/contactInformationValidation';
import { Form } from '../../commons/Form/Form';
import { FormBlockWrapper } from '../../commons/FormBlockWrapper/FormBlockWrapper';
import { FieldsWrapper } from '../../commons/FieldsWrapper/FieldsWrapper';
import { ErrorWrapper } from '../../commons/ErrorWrapper/ErrorWrapper';
import { ErrorMessage } from '../../commons/ErrorMessage/ErrorMessage';
import FormTextField from '../FormTextField/FormTextField';
import EmailPhoneField from '../EmailPhoneField/EmailPhoneField';
import FormCheckbox from '../FormCheckbox/FormCheckbox';

const ContactInformation = forwardRef<ContactInformationHandle, ContactInformationProps>(
  ({ contactInformation, setContactInformation, setError }, ref) => {
    const contactInformationForm = useForm<ContactInformationType>({
      defaultValues: { ...contactInformation },
      resolver: yupResolver(contactInformationValidation),
    });

    const { control, handleSubmit, formState, trigger } = contactInformationForm;
    const { errors } = formState;

    const submit: SubmitHandler<ContactInformationType> = (data) => {
      setContactInformation((prev) => ({ ...data, disabled: !prev.disabled }));
      setError((prev) => ({ ...prev, contactError: false }));
    };

    const validateAndSubmit = async () => {
      const isValid = await trigger();
      if (isValid) {
        await handleSubmit(submit)();
      } else {
        setError((prev) => ({ ...prev, contactError: true }));
      }
    };

    useImperativeHandle(ref, () => ({
      contactValidate: validateAndSubmit,
    }));

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
                disabled={contactInformation.disabled}
                error={!!errors.surname}
              />
              {errors.surname && <ErrorMessage variant="body1">{errors.surname.message}</ErrorMessage>}
            </ErrorWrapper>
            <ErrorWrapper sx={{ gap: '8px' }}>
              <FormTextField
                required={true}
                autoComplete="family-name"
                id="name"
                label="Имя"
                placeholder="Иван"
                control={control}
                disabled={contactInformation.disabled}
                error={!!errors.name}
              />
              {errors.name && <ErrorMessage variant="body1">{errors.name.message}</ErrorMessage>}
            </ErrorWrapper>
            <ErrorWrapper sx={{ gap: '8px' }}>
              <FormTextField
                autoComplete="additional-name"
                id="patronymic"
                label="Отчество"
                placeholder="Иванович"
                control={control}
                disabled={contactInformation.disabled}
                error={!!errors.patronymic}
              />
              {errors.patronymic && <ErrorMessage variant="body1">{errors.patronymic.message}</ErrorMessage>}
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
                disabled={contactInformation.disabled}
                error={!!errors.phone}
              />
              {errors.phone && <ErrorMessage variant="body1">{errors.phone.message}</ErrorMessage>}
            </ErrorWrapper>
            <ErrorWrapper>
              <EmailPhoneField
                id="email"
                autoComplete="email"
                label="E-mail"
                placeholder="example@domain.com"
                control={control}
                disabled={contactInformation.disabled}
                error={!!errors.email}
              />
              {errors.email && <ErrorMessage variant="body1">{errors.email.message}</ErrorMessage>}
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
                control={<FormCheckbox id="activity" control={control} disabled={contactInformation.disabled} />}
                label="За любой движ"
                sx={{ color: errors.activity ? 'error.main' : 'text.primary', margin: 0 }}
              />
            </Box>
            {errors.activity && (
              <ErrorMessage variant="body1" sx={{ marginLeft: '12px' }}>
                {errors.activity.message}
              </ErrorMessage>
            )}
          </ErrorWrapper>
        </FormBlockWrapper>
      </Form>
    );
  },
);

ContactInformation.displayName = 'ContactInformation';
export default ContactInformation;
