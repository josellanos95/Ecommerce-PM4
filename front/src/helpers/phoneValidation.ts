export const validatePhone = (phone: string): string => {
    let error = '';
    const phoneRegex = /^\d{10}$/; // Asume que el teléfono debe tener 10 dígitos
  
    if (!phone) {
      error = 'El teléfono es requerido';
    } else if (!phoneRegex.test(phone)) {
      error = 'El teléfono no es válido';
    }
  
    return error;
  };