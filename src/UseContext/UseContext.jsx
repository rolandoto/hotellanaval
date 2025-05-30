import React, {useState} from 'react'
import { addDays} from 'date-fns';
import moment from "moment";

const Autoconext = React.createContext({})

export const AutoProvider =({children}) =>{
    
    const [contextMenuPosition, setContextMenuPosition] = useState(false);
    const [adults, setAdults] = useState(2);
    const [childrem, setChildrem] = useState(0);

    const totalCountAdults = adults + childrem;

    const handChangeAdults = () => {
      setAdults(adults + 1);
    }
    
    const handChangeChildrem = () => {
      setChildrem(childrem + 1);
    }
    
    const handDecreaseAdults = () => {
      if (adults > 1) {
        setAdults(adults - 1);
      }
    }
    
    const handDecreaseChildren = () => {
      if (childrem > 0) {
        setChildrem(childrem - 1);
      }
    }
  
     
  const today = new Date();                          // Hoy
  const tomorrow = new Date(today);                  // Clonar la fecha de hoy
  tomorrow.setDate(tomorrow.getDate() + 1);          // Sumar un día

  // Establecer el estado usando objetos Date completos
  const [state, setState] = useState([
    {
      startDate: today,       // Objeto Date de hoy
      endDate: tomorrow,      // Objeto Date de mañana
      key: 'selection',
      showDateDisplay: true,
      color: 'transparent',
    }
  ]);

    
    const [isStartDateSelected, setIsStartDateSelected] = useState(false);
    const [rangeMessage, setRangeMessage] = useState('');


const handleSelect = (ranges) => {
  const { startDate, endDate } = ranges.selection;

  setState([
      {
          startDate,
          endDate,
          key: 'selection',
          color: startDate && endDate ? 'black' : 'transparent',
      },
  ]);

  if (startDate && !isStartDateSelected) {
      // Se selecciona la fecha de inicio
      setRangeMessage("Fecha de inicio seleccionada. Ahora seleccione la fecha de finalización.");
      setIsStartDateSelected(true);
  } else if (startDate && endDate) {
      // Calcula la diferencia en días entre las dos fechas
      const diffInTime = endDate - startDate;
      const diffInDays = diffInTime / (1000 * 60 * 60 * 24); // Convierte el tiempo en días

      if (diffInDays < 1) {
          setRangeMessage("El rango seleccionado debe ser al menos de un día.");
          setIsStartDateSelected(false); // Reinicia la selección
          alert("deber ser mayor a un dia")
      } else {
          // Si el rango es válido
          setRangeMessage(`Rango seleccionado: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`);
          setIsStartDateSelected(false); // Reinicia para futuras selecciones
          setContextMenuPosition(false); // Cierra el modal o menú contextual
      }
  }
};

  console.log(rangeMessage)
  
    const getClassNameForDate = (date) => {
      const { startDate, endDate } = state[0];
      
      // Define las clases para el texto
      if (startDate && endDate) {
        if (date >= startDate && date <= endDate) {
          return 'text-white'; // Color de texto blanco y fondo azul, ajusta según tu estilo
        }
      } else if (startDate && date.getTime() === startDate.getTime()) {
        return 'text-white '; // Color de texto blanco y fondo azul, ajusta según tu estilo
      } else if (endDate && date.getTime() === endDate.getTime()) {
        return 'text-white '; // Color de texto blanco y fondo azul, ajusta según tu estilo
      }
    
      return 'text-black'; // Color de texto negro predeterminado
    };
    
    
  
    return <Autoconext.Provider value={{  
                                    state,
                                    handleSelect,
                                    setContextMenuPosition,
                                    contextMenuPosition,
                                    getClassNameForDate,
                                    adults,
                                    childrem,
                                    handChangeAdults,
                                    handChangeChildrem,
                                    handDecreaseAdults,
                                    handDecreaseChildren,
                                    totalCountAdults,
                                    isStartDateSelected
                                }}>
      {children}
    </Autoconext.Provider>
  }
  
  export default Autoconext