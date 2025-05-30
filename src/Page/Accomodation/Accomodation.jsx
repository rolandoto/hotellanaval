
import React, { useCallback, useEffect, useState } from "react";
import { DateRange } from 'react-date-range';
import esLocale from 'date-fns/locale/es';
import "./style.css"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Search from "../../Component/Search/Search";
import CardAccomodation from "../../Component/CardAccomodation/CardAccomodation";
import CalenderSearch from "../../Component/CalenderSearch/CalenderSearch";
import UseHotelActions from "../../Actions/useHotelsActions";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";
import moment from "moment";
import LoadingSkeleton from "../../Component/LoadingSkeleton/LoadingSkeleton";
import UseCalenderSearch from "../../Hooks/UseCalenderSearch";
import EmpyCart from "../../Component/EmpyCart/EmpyCart";
import Cart from "../../Component/Cart/Cart";
import { IconRiCloseLargeLine } from "../../Component/Icons/Icons";
import UseCart from "../../Hooks/UseCart";
import LoadingOverlay from "../../Component/LoadingCreateReserva/LoadingOverlay";
import useRoomsPromotions from "../../Actions/useRoomsPromotions";
import WhatsappButton from "../../Component/WhatsappButton/WhatsappButton";
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import FooterHome from "../../Component/Footer/FooterHome";
import { Helmet } from "react-helmet";
import HeaderStep from "../../Component/HeaderStep/HeaderStep";

const Accommodation = () => {


  useEffect(() => {
    // Scrolls to the top of the document on component mount
    window.scrollTo(0, 0);
}, []);

  const {getHotel} = UseHotelActions()
  const [contextShowMenuPeople, setContextShowMenuPeople] = useState(false);
  const {error,hotel,loading}= useSelector((state) => state.Hotel)
  const [promotion,setPromotions] =useState(false)
  const [visible, setVisible] = useState(false);
      
  const {loadingCart} = useSelector(state => state.Cart);
  const {handleSelect,state,setContextMenuPosition,contextMenuPosition,
    handChangeAdults,
    handChangeChildrem,
    handDecreaseAdults,
    handDecreaseChildren,
    totalCountAdults,
    adults,
    childrem ,
    getClassNameForDate} =  UseCalenderSearch()

    const {getCartSubtotal} = UseCart()
    const subtotal = getCartSubtotal()
    const [checkbox,setCheckBox] =useState(false)
    const startDate = state[0]?.startDate;
    const endDate = state[0]?.endDate;
    const formattedStartDate = startDate ? moment(startDate).format('YYYY-MM-DD') : '';
    const formattedEndDate = endDate ? moment(endDate).format('YYYY-MM-DD') : '';
    const formattedStartDateToString = moment(state[0]?.startDate).format('DD MMM YYYY').toLowerCase();
    const formattedEndDateToString = moment(state[0]?.endDate).format('DD MMM YYYY').toLowerCase();


    const formattedEnd = moment(state[0]?.endDate).format('DD MMM').toLowerCase();
    const formattedStart = moment(state[0]?.startDate).format('DD MMM').toLowerCase();


    const PostHotelByIdHotel = useCallback(async () => {
        setContextMenuPosition(false);
        setContextShowMenuPeople(false)
        await getHotel({ id: 26, desde:formattedStartDate, hasta: formattedEndDate,counPeople:totalCountAdults });
    }, [formattedStartDate,formattedEndDate,totalCountAdults]);


    useEffect(() =>{
      PostHotelByIdHotel()
    },[])

    const HandClickMenuPeople =() =>{
      if(contextShowMenuPeople){
        setContextShowMenuPeople(false)
      }else if(!contextShowMenuPeople){
        setContextShowMenuPeople(true)
      }
      setContextMenuPosition(false)
    }

    const HandClickMenu =() =>{
      if(contextMenuPosition){
        setContextMenuPosition(false)
      }else if(!contextMenuPosition){
        setContextMenuPosition(true)
      }
      setContextShowMenuPeople(false)
    }
    
    const handClickCart =() =>{
      setCheckBox(!checkbox)
   }

    const HandClickMenuEnd =() =>{
      if(contextMenuPosition){
        setContextMenuPosition(false)
      }else if(!contextMenuPosition){
        setContextMenuPosition(true)
      }
      setContextShowMenuPeople(false)
    }

    const  {GetRoomsPromotions} = useRoomsPromotions()
  
    const FetchDate =async() =>{
          await GetRoomsPromotions({id:26})
    }


    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 5000); // 10000 ms = 10 segundos
  
      return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
    }, []);
  

  
    useEffect(() =>{
      FetchDate ()
    },[])
  
    const FillContent =()=>{
      if(!formattedStartDate && !formattedEndDate){
        return   <EmpyCart title={" Busca tu reserva en el calendario."} />
      }
      if(loading){
       return  (
                <div  className=" lg:flex    mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8">
                <LoadingSkeleton />
                </div> 
       ) 
      }if(error){
        return    <EmpyCart title={"No tenemos habitaciones disponibles para esta ocupación"} />
                }
        return <>        <div className="gap-5 max-w-7xl m-auto grid md:grid-cols-3 grid-cols-1"> {hotel?.availableRooms?.map((List,index) => <CardAccomodation  
                                                                totalCountAdults={totalCountAdults}
                                                                promotion={promotion} 
                                                                key={index} 
                                                                {...List}/>)}
                                                                </div> 
                                                                </>
    }
    const monthsToShow = window.innerWidth >= 700 ? 2 : 1;

    return (
      <div  className="bg-[#f6f6f6] h-full  " >
          <Helmet>
            <title>Habitaciones Black Friday - 10% de Descuento en hotel la naval</title>
            <meta name="description" content={`Reserva en hotel la naval y obtén un 10% de descuento con el código hotel la naval Oferta por tiempo limitado.`} />
            <meta name="keywords" content="hotel, descuento, reserva, promoción, alojamiento, oferta especial" />
            <meta property="og:title" content={`Código de Descuento hotel la naval`} />
            <meta property="og:description" content={`Aprovecha un 10% de descuento en hotel la naval.`} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.hotellanaval.co/Accomodation" />
        </Helmet>
                <div className="relative  bg-cover bg-center h-full">
                    <div className="hidden md:block">
                      <HeaderStep currentStep={1} />
                    </div>
                    <Toaster position="bottom-right"  richColors   />
                    {loadingCart && <LoadingOverlay title={"Cargando..."} />}
                    <WhatsappButton />
                    {subtotal >0 &&<Cart    
                                    checkbxo={checkbox} 
                                    handClickCart={handClickCart} /> } 
                    <div className="p-2 lg:px-8 md:flex hidden " >
                    <CalenderSearch  HandClickMenuPeople={HandClickMenuPeople} 
                                    formattedStartDateToString={formattedStartDateToString}
                                    formattedEndDateToString={formattedEndDateToString}
                                    HandClickMenuEnd={HandClickMenuEnd}
                                    HandClickMenu={HandClickMenu}
                                    onsubmit={PostHotelByIdHotel} 
                                    totalCountAdults={totalCountAdults}
                                    />
                    </div>
                

                  <div className="hidden lg:block  ">
                      {contextMenuPosition && (
                        <DateRange
                          className="flex calender-search-Acoomodation lg:hidden"
                          rangeColors={["rgb(255 104 0 / 36%);"]}
                          minDate={new Date()}
                          onChange={handleSelect}
                          months={2}
                          dayContentRenderer={(date) => {
                            const className = getClassNameForDate(date);
                        
                            return (
                              <div className={className}>
                                {date.getDate()}
                              </div>
                            );
                          }}
                          autoFocus
                          moveRangeOnFirstSelection={false} // No mueve el rango en la primera selección
                          showSelectionPreview={false} // Muestra la selección previa
                          startDatePlaceholder="Early"
                          showDateDisplay={false}
                          ranges={state}
                          direction="horizontal"
                          locale={esLocale}
                        />
                      )}
                  </div>
                  {contextMenuPosition &&
                      <div className="  lg:hidden fixed inset-0 bg-white flex items-start justify-center z-50  md:shadow-[17px_20px_40px_rgba(0,0,0,0.21)] md:rounded-[1.25rem] md:!font-size[16px] md:!user-select-none">
                        <div className="bg-white p-4  rounded-lg shadow-lg w-full h-full md:w-auto md:h-auto">
                          <button className="absolute top-4 right-4 text-black text-lg" onClick={() =>setContextMenuPosition(false)} ><IconRiCloseLargeLine />;</button>
                        <div>
                            <h2 className="text-center text-2xl font-semibold mb-4">Selecionar fecha</h2>
                            <DateRange 
                                  className="flex calender-search-Acoomodation lg:hidden"
                                  rangeColors={["rgb(255 104 0 / 36%);"]}
                                  minDate={new Date()}
                                  onChange={handleSelect}
                                  editableDateInputs={false}
                                  months={monthsToShow}
                                  dayContentRenderer={(date) => {
                                    const className = getClassNameForDate(date);
                                    return (
                                      <div className={className}>
                                        {date.getDate()}
                                      </div>
                                    );
                                  }}
                                  autoFocus
                                  moveRangeOnFirstSelection={false} // No mueve el rango en la primera selección
                                  showSelectionPreview={false} // Muestra la selección previa
                                  startDatePlaceholder="Early"
                                  showDateDisplay={false}
                                  ranges={state}
                                  direction="horizontal"
                                  locale={esLocale}
                              />
                            <button
                              className="mt-6 bg-black text-white px-6 py-3 rounded-lg "
                              onClick={(e) => setContextMenuPosition(false) }
                              style={{
                                position: 'absolute',
                                bottom: '20px',  // Ajusta esta propiedad según la distancia que desees del borde inferior
                                left: '50%',     // Centra el botón horizontalmente
                                transform: 'translateX(-50%)', // Ajusta la posición centrada
                              }}
                            >
                              Continuar
                            </button>
                            </div>
                        </div> 
                    </div>} 
                          
                    {contextShowMenuPeople &&
                      <div className=" lg:hidden fixed inset-0 bg-white flex items-start justify-center z-50   md:rounded-[1.25rem] md:!font-size[16px] md:!user-select-none">
                        <div className="bg-white p-4   rounded-lg  w-full h-full md:w-auto md:h-auto">
                          <button className="absolute top-4 right-4 text-black text-lg" onClick={() =>setContextShowMenuPeople(false)} ><IconRiCloseLargeLine /></button>
                                <div>
                                      <h2 className="text-center text-2xl font-semibold mb-4">Selecionar adultos</h2>
                                      <Search contextShowMenuPeople={contextShowMenuPeople}
                                      top={715}
                                      adults={adults}
                                      childrem={childrem}
                                      handChangeAdults={handChangeAdults}
                                      handDecreaseAdults={handDecreaseAdults}
                                      handChangeChildrem={handChangeChildrem}
                                      handDecreaseChildren={handDecreaseChildren}
                                      setContextShowMenuPeople={setContextShowMenuPeople}  />
                              </div>
                          </div> 
                      </div>} 
                        <div className="hidden lg:block  ">
                            {contextShowMenuPeople && 
                              <Search contextShowMenuPeople={contextShowMenuPeople}
                              top={190}
                              adults={adults}
                              childrem={childrem}
                              handChangeAdults={handChangeAdults}
                              handDecreaseAdults={handDecreaseAdults}
                              handChangeChildrem={handChangeChildrem}
                              handDecreaseChildren={handDecreaseChildren}
                              setContextShowMenuPeople={setContextShowMenuPeople}  />}
                        </div>  
                        <div className="w-full p-4  animation z-40 lg:hidden bg-white fixed top-[0px]   shadow-md ">
                          <div className="flex items-center justify-between text-gray-700 ">
                            <div className="flex items-center" onClick={HandClickMenu}>
                              <SlCalender fontSize={20}  className="mr-2" />
                              <span className="font-bold" >{formattedStart === 'fecha inválida' ? '-- / -- / --' : formattedStart}→ {formattedEnd === 'fecha inválida' ? '-- / -- / --' : formattedEnd}</span>
                            </div>
                            <div className="flex items-center " onClick={HandClickMenuPeople}>
                              <FaUser fontSize={15}  color="black"/>
                              <span className="" >{adults} huésped</span>
                            </div>
                            <div className="flex items-center bg-gray-800 rounded-sm  justify-center   lg:text-[15px]  text-[12px]  cursor-pointer z-40 lg:w-[250px] 
                              w-[80px] text-white lg:py-4 py-2    hover:bg-[ff7a45px] transition duration-200 " onClick={PostHotelByIdHotel}>
                              <span className="" >Reservar</span>
                              <FiArrowRight fontSize={15}/>
                            </div>
                          </div>
                        </div>
                        <div >
                        {FillContent()}
                        </div>
                </div>   
                <FooterHome/>
            </div>
    )
}

export default Accommodation;
