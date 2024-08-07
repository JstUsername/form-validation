import { Typography, Checkbox, Box } from '@mui/material';
import { Form } from '../../commons/Form/Form';
import { FormBlockWrapper } from '../../commons/FormBlockWrapper/FormBlockWrapper';
import { FieldsWrapper } from '../../commons/FieldsWrapper/FieldsWrapper';
import CustomTextField from '../CustomTextField/CustomTextField';
import EmailPhoneField from '../EmailPhoneField/EmailPhoneField';

export default function ContactInformation() {
  return (
    <Form>
      <FormBlockWrapper>
        <Typography variant="h6" sx={{ marginLeft: '2px' }}>
          Общая информация
        </Typography>
        <FieldsWrapper>
          <CustomTextField required={true} id="surname-input" label="Фамилия" placeholder="Иванов" />
          <CustomTextField required={true} id="name-input" label="Имя" placeholder="Иван" />
          <CustomTextField id="patronymic-input" label="Отчество" placeholder="Иванович" />
        </FieldsWrapper>
      </FormBlockWrapper>
      <FormBlockWrapper>
        <Typography variant="h6" sx={{ marginLeft: '2px' }}>
          Контакты
        </Typography>
        <FieldsWrapper>
          <EmailPhoneField required={true} id="phone-input" type="tel" label="Телефон" />
          <EmailPhoneField id="email-input" type="email" label="E-mail" placeholder="example@domain.com" />
        </FieldsWrapper>
      </FormBlockWrapper>
      <FormBlockWrapper>
        <Typography variant="h6" sx={{ marginLeft: '2px' }}>
          Другое
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox id="activity-checkbox" />
          <Typography variant="body1">За любой движ</Typography>
        </Box>
      </FormBlockWrapper>
    </Form>
  );
}
