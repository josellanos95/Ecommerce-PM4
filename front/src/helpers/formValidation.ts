import { LoginProps } from '@/types';
import { validateEmail } from './emailValidation';
import { validatePassword } from './passValidation';
import { validatePhone } from './phoneValidation';
import { validateAddress } from './addressValidation';
import { validateName } from './nameValidation';
import { RegisterErrorprops } from '@/types';
import { RegisterProps } from '@/types';

export const formLoginValidation = (values: LoginProps): LoginProps => {
  let errors: LoginProps = {
    email: '',
    password: '',
  };

  errors.email = validateEmail(values.email);
  errors.password = validatePassword(values.password);

  return errors;
};

export const formRegisterValidation = (values: RegisterProps): RegisterErrorprops => {
  let errors: RegisterErrorprops = {
    email: '',
    password: '',
    name: '',
    address: '',
    phone: ''
  };

  errors.email = validateEmail(values.email);
  errors.password = validatePassword(values.password);
  errors.phone = validatePhone(values.phone);
  errors.address = validateAddress(values.address);
  errors.name = validateName(values.name);

  return errors;
};
