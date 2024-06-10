export const validateName = (name: string): string => {
    let error = '';
  
    if (!name) {
      error = 'El nombre es requerido';
    }
  
    return error;
  };