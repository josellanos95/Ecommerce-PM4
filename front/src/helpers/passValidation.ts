export const validatePassword = (password: string): string => {
    if (!password) {
      return 'La contraseña es requerida';
    }
  
    if (password.length < 6) {
      return 'La contraseña debe tener al menos 6 caracteres';
    }
  
    return '';
  };