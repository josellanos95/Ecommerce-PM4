import validator from 'validator';

export const validateEmail = (email: string): string => {
  if (!email) {
    return 'El correo electrónico es requerido';
  }

  if (!validator.isEmail(email)) {
    return 'El correo electrónico es inválido';
  }

  return '';
};