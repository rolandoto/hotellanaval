import React, {useEffect, useState} from 'react';
import Header from "../../Component/Header/Header"
import UseCart from "../../Hooks/UseCart"
import useReservationCreate from '../../Actions/useReservationCreate';
import { useSelector } from 'react-redux';
import { Toaster } from 'sonner';
import moment from 'moment';
import EmpyCart from '../../Component/EmpyCart/EmpyCart';
import LoadingOverlay from '../../Component/LoadingCreateReserva/LoadingOverlay';
import useFormValues from '../../Hooks/useFormValues';
import useFetchData from '../../Hooks/useFetchData';
import useValidation from '../../Hooks/ValidateFormValues';
import HeaderCheckout from '../../Component/HeaderCheckout/HeaderCheckout';
import FormCheckout from '../../Component/FormCheckout/FormCheckout';
import Footer from '../../Component/Footer/Footer';
import ConfirmationMessage from '../../Component/ConfirmationMessage/ConfirmationMessage';
import WhatsappButton from '../../Component/WhatsappButton/WhatsappButton';
import FooterHome from '../../Component/Footer/FooterHome';
import HeaderStep from '../../Component/HeaderStep/HeaderStep';
import { Helmet } from 'react-helmet';

const Checkout  =() =>{
    useFetchData();

    useEffect(() => {
        // Scrolls to the top of the document on component mount
        window.scrollTo(0, 0);
    }, []);
    const [formErrors, setFormErrors] = useState({});
    const [formValues, handleChange] = useFormValues();
    const {cart,getCartSubtotal} = UseCart()
    const subtotal = getCartSubtotal()
    const {PostCreateHotel} =useReservationCreate()
    const {Country,loading,reservation}= useSelector(state => state.Reservation);
    const {loadingCart} = useSelector(state => state.Cart);
    const cardNumberArray = formValues.cardNumber.split(" ");
    const cardNumberString = cardNumberArray.join("");
    const now = moment().format('YYYY-MM-DD');
    const validate = useValidation();


    const handleSubmit = async(e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
        await PostCreateHotel({ cart,
                                  name:formValues.name,
                                  apellido:formValues.apellido,
                                  email:formValues.email,
                                  city:formValues.city,
                                  country:formValues.country,
                                  phone:formValues.phone,
                                  fecha:now,
                                  number:cardNumberString,
                                  exp_month:formValues.expiryMonth,
                                  exp_year:formValues.expiryYear,
                                  cvc:formValues.cvc,
                                  card_holder:formValues.cardName,
                                  subtotal,
                                  valid:0
                                  })
        
       
        } 
    };



    /*const togglePanel = () => {
      setIsOpen(!isOpen);
    };
*/

const FillContent =() =>{

    if(Boolean(reservation)){
        return ( <ConfirmationMessage title={"Tu reserva ha sido creada"} />)
    }

    if(!subtotal > 0){
        return (  <EmpyCart title={"Carrito vacio"} />)
    }else{
        return <FormCheckout 
                  Country={Country}
                  loading={loading}
                  handleSubmit={handleSubmit}
                  formErrors={formErrors}
                  handleChange={handleChange}
                  formValues={formValues}
                  cart={cart}
                  subtotal={subtotal}
            />
    }
}



return (<>
    {loadingCart && <LoadingOverlay title={"Cargando..."} />}
    {loading && <LoadingOverlay title={"Creando reserva..."} />}  
    <Helmet>
        <title>Checkout</title>
        <meta name="description" content="Habitaciones Black Friday - 10% de Descuento en hotel la naval." />
        <link rel="canonical" href="https://www.hotellanaval.co/Checkout" />
    </Helmet>
    <HeaderStep currentStep={2} />
    <WhatsappButton />
    <Toaster position="bottom-right"  richColors   />  
        {FillContent()}
        <FooterHome />
        </>)

}

export default Checkout