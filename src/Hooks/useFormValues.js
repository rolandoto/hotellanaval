import { useState } from 'react';

const useFormValues = () => {

  const [formValues, setFormValues] = useState({
    name: '',
    apellido: '',
    email: '',
    phone: '',
    address: '1212213',
    city: 'medellin',
    country: '471',
    specialReq: '132',
    cardNumber: '5306917225679369',
    cardName: '123',
    expiryMonth: '56',
    expiryYear: '56',
    cvc: '565',
    termsAccepted: false,
    siteTermsAccepted: false,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cardNumber') {
      const inputVal = value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos
      const limitedInputVal = inputVal.slice(0, 16); // Limitar a 16 dígitos
      const formattedCardNumber = limitedInputVal.replace(/(\d{4})(?=\d)/g, '$1 '); // Insertar un espacio cada cuatro dígitos
      setFormValues({ ...formValues, [name]: formattedCardNumber });
    } else if (name === 'cvc') {
      const inputVal = value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos
      const limitedInputVal = inputVal.slice(0, 4); // Limitar a 4 dígitos (entre 3 y 4)
      setFormValues({ ...formValues, [name]: limitedInputVal });
    } else if (name === 'termsAccepted') {
      const inputValue = value.toLowerCase().trim(); // Convertir a minúsculas y eliminar espacios adicionales
      const accepted = inputValue === 'false';
      setFormValues({ ...formValues, [name]: accepted });
    } else if (name === 'siteTermsAccepted') {
      const inputValue = value.toLowerCase().trim(); // Convertir a minúsculas y eliminar espacios adicionales
      const acceptede = inputValue === 'false';
      setFormValues({ ...formValues, [name]: acceptede });
    }
    else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  return [formValues, handleChange];
};

export default useFormValues;