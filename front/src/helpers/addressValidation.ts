export const validateAddress = (address: string): string => {
    let error = '';
  
    if (!address) {
      error = 'La dirección es requerida';
    }
  
    return error;
  };