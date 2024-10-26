import React, { useCallback, useEffect, useRef, useState } from "react"
import UseCalenderSearch from "../../Hooks/UseCalenderSearch";
import { DateRange } from 'react-date-range';
import esLocale from 'date-fns/locale/es';
import Search from "../../Component/Search/Search";
import {Link, useNavigate } from "react-router-dom";
import Header from "../../Component/Header/Header";
import CalenderSearchHome from "../../Component/CalenderSearch/CalenderSearchHome";
import TitleWelcome from "../../Component/TitleWelcome/TitleWelcome";
import Features from "../../Component/Features/Features";
import Footer from "../../Component/Footer/Footer";
import AccordionAsk from "../../Component/AccordionAsk/AccordionAsk";
import Events from "../../Component/Events/Events";
import RoomDetail from "../../Component/RoomDetail/RoomDetail";
import RoomPresentaion from "../../Component/RoomPresentation/RoomPresentation";
import "./home.css"
import { IconRiCloseLargeLine, IconsFaBanSmoking, IconsFaConciergeBell, IconsFaGlassMartini, IconsFaSquareParking, IconsFaStore, IconsGiForkKnifeSpoon, IconsRiBankFill, IconsaCar } from "../../Component/Icons/Icons";
import 'react-date-range/dist/styles.css'; // import the default styles
import 'react-date-range/dist/theme/default.css'; // import the default theme
import moment from 'moment';
import 'moment/locale/es';
import UseCart from "../../Hooks/UseCart";
import Cart from "../../Component/Cart/Cart";
import UseHotelActions from "../../Actions/useHotelsActions";
import { useSelector } from "react-redux";
import WhatsappButton from "../../Component/WhatsappButton/WhatsappButton";
import BookNowButton from "../../Component/BookNowButton/BookNowButton";

const Home =() =>{
  const navigate = useNavigate();
  moment.locale('es');
  
  useEffect(() => {
    // Scrolls to the top of the document on component mount
    window.scrollTo(0, 0);
}, []);

  const {getCartSubtotal} = UseCart()
  const {hotelList,loadingHotel,errorHotel}= useSelector((state) => state.Hotel)
  const {getListHotel} =UseHotelActions()

  const fetchDate =async() =>{
    await getListHotel()
  }

  useEffect(() =>{
    fetchDate()
  },[])

  const FillContent =()=>{
    if(errorHotel){
      return   <h1>Error en el servicio</h1>
              }
  }

  const FindIdHotel=(hotel) =>{
		return hotel.id_hotel ==27
	}
	
	const hotel = hotelList.find(FindIdHotel)


const subtotal = getCartSubtotal()

  const reviews = [

    {
      id: 1,
      name: "Robinson Vasquez",
      date: "hace un mes",
      rating: 4,
      text: "Un ambiente tranquilo, buena ubicación!",
      avatar: "https://github.com/rolandoto/image-pms/blob/main/Robinson(3).png?raw=true", // Add the path to the avatar image if available
    },
    {
      id: 2,
      name: "Bárbara Pérez",
      date: "hace un mes",
      rating: 5,
      text: "",
      avatar: "https://github.com/rolandoto/image-pms/blob/main/Cielo.png?raw=true", // Add the path to the avatar image if available
    },
    {
      id: 3,
      name: "Esleidy Largo",
      date: "",
      rating: 5,
      text: "",
      avatar: "https://github.com/rolandoto/image-pms/blob/main/Esleidy(3).png?raw=true", // Add the path to the avatar image if available
    },
   
    {
      id: 4,
      name: "IMPORT JHEYSSI SAS",
      date: "hace 5 meses",
      rating: 5,
      text: "Un poquito lejos del centro, sobre la iluminación es perfecta para descansar y la ubicación estratégica para encender las luces por zonas me parece muy bueno para el precio! Más amabilidad es lo único que podría pedir, con esto no digo que son groseros, mejor dicho son intermedio! 👍",
      avatar: "https://github.com/rolandoto/image-pms/blob/main/importadora(2).png?raw=true",
    },
    {
      id: 5,
      name: "Angie gil",
      date: "hace un mes",
      rating: 5,
      text: "Es un lugar muy agradable, con un restaurante encantador, buena atención al cliente, las habitaciones aseadas y ordenadas; el único defecto es que las habitaciones no cuentan con agua caliente y no hay TV por cable, pero por lo demás todo está súper bien.      ",
      avatar: "https://github.com/rolandoto/image-pms/blob/main/angie(2).png?raw=true",
    }
  ];
  
  const features = [
      { icon: <IconsFaGlassMartini/>, title: 'Cóctel de bienvenida' },
      { icon: <IconsGiForkKnifeSpoon/>, title: 'Desayuno incluido' },
      { icon: <IconsFaConciergeBell/>, title: 'Recepción 24 horas' },
      { icon: <IconsaCar/>, title: 'Variedad de transporte', description: 'Metro, tranvía, autobús, taxi' },
      { icon: <IconsRiBankFill/>, title: 'Vida cultural y nocturna', description: 'Bares, museos, restaurantes' },
      { icon: <IconsFaSquareParking/>, title: 'Parqueadero gratis*', description: 'Sujeto a disponibilidad' },
      { icon: <IconsGiForkKnifeSpoon/>, title: 'Restaurante - Bar  ', description: ' con vista panorámica' },
      { icon: <IconsFaStore/>, title: 'Alianzas comerciales', description: 'Servicio de taxi, gimnasio, tours, médico, comunicaciones.' },
      { icon: <IconsFaBanSmoking/>, title: 'Espacios libre de humo', description: "" },
    ];
    
      const roomSectionRef = useRef(null);
      const roomEventsSectionRef = useRef(null);

      const scrollToRoomSection = () => {
        if (roomSectionRef.current) {
            roomSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
  

    const scrollToRoomSectionEvent = () => {
      if (roomEventsSectionRef.current) {
          roomEventsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

      const [contextShowMenuPeople, setContextShowMenuPeople] = useState(false);
      const {handleSelect,state,
            setContextMenuPosition,
            contextMenuPosition,
            handChangeAdults,
            handChangeChildrem,
            handDecreaseAdults,
            handDecreaseChildren,
            totalCountAdults,
            adults,
            childrem ,
            getClassNameForDate } =  UseCalenderSearch()
        
      
    const formattedStartDateToString = moment(state?.[0]?.startDate ?? '').format('DD MMM YYYY').toLowerCase();

    const formattedEndDateToString = moment(state?.[0]?.endDate ?? '').format('DD MMM YYYY').toLowerCase();
    

    const PostHotelByIdHotel = useCallback(async () => {
      setContextMenuPosition(false);
      navigate("/Accomodation");
    }, []);


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
       
  
    const HandClickMenuEnd =() =>{
      if(contextMenuPosition){
        setContextMenuPosition(false)
      }else if(!contextMenuPosition){
        setContextMenuPosition(true)
      }
      setContextShowMenuPeople(false)
    }             

   /* const faqs = [
      {
        question: '¿Cuáles son los sitios turísticos de la ciudad y si están cerca al hotel?',
        answer: (
          <ul className="list-disc list-inside">
            <li>Teatros (3 a 9 min caminando)</li>
            <li>Museo de Antioquia</li>
            <li>Plaza Botero</li>
            <li>Jardín Botánico de Medellín</li>
            <li>Parque Lleras</li>
            <li>Comuna 13</li>
          </ul>
        ),
      },
      {
        question: '¿Cómo es la seguridad del sector? ¿se puede salir en la noche?',
        answer: 'La seguridad del sector es buena, pero siempre se recomienda tomar precauciones normales como en cualquier ciudad. Es seguro salir en la noche, especialmente en áreas concurridas y turísticas.',
      },
      {
        question: '¿Cuáles son los mejores centros comerciales de la ciudad de Medellín?',
        answer: (
          <ul className="list-disc list-inside">
            <li>Centro Comercial Santa Fe</li>
            <li>Centro Comercial El Tesoro</li>
            <li>Centro Comercial Oviedo</li>
            <li>Centro Comercial Premium Plaza</li>
          </ul>
        ),
      },
      {
        question: '¿Dónde puedo cambiar divisas?',
        answer: 'Puede cambiar divisas en casas de cambio ubicadas en centros comerciales, en el aeropuerto, y en diversas partes del centro de la ciudad.',
      },
    ];

    const rooms = [
      {  title: 'Room Box Ventilador', price:99000 , image:"https://grupo-hoteles.com/storage/app/4/rooms/203289556-10-rooms-slider-1-habitacion_Estandar_Hotel_en_Medellin_Gallery_Hotel-01.webp", 
          features: ['Cama matrimonial', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV'] },
      { title: 'Room Box Aire',price:109000, image: "https://grupo-hoteles.com/storage/app/4/rooms/1046121300-11-rooms-slider-1-habitacion_Aire_Hotel_en_Medellin_Gallery_Hotel-01.webp", features: ['Cama matrimonial', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV','Aire Acondicionado'] },
      { title: 'Room Box Jacuzzi',price:169000, image: "https://grupo-hoteles.com/storage/app/4/rooms/1563326590-12-rooms-slider-1-habitacion_Jacuzzi_Hotel_en_Medellin_Gallery_Hotel-02.webp", features: ['Cama matrimonial', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV','Aire Acondicionado','Jacuzzi'] },
    ];
*/
    const monthsToShow = window.innerWidth >= 700 ? 2 : 1; // Cambia 768 según tu punto de ruptura deseado

   /* const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, []);
    */

    const [scrolled, setScrolled] = useState(false);
    const [scrolledbook, setScrolledBook] = useState(false);
      
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setScrolled(true);
          } if(window.scrollY > 200){
            setScrolledBook(true)
          } else {
            setScrolled(false);
            setScrolledBook(false)
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 4000); // 10000 ms = 10 segundos
  
      return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
    }, []);


   
/**
 * 
 * <div className="relative w-full h-screen  flex items-center justify-center">
  <div className="relative w-[750px] h-[750px]">
 
    <img 
        src="https://kiinliving.com/C01.svg" 
        alt="Circular line decoration" 
        className="absolute z-40 top-[-20%] left-[-1%] w-[160%] h-[142%] object-cover"
      />
    <div className="relative w-full h-full rounded-full overflow-hidden">
      <img 
        src="https://github.com/rolandoto/image-pms/blob/main/WhatsApp%20Image%202024-08-08%20at%2010.22.01%20PM.jpeg?raw=true" 
        alt="Luxury bedroom" 
        className="w-full h-full object-cover"
      />
    </div>

  
    <div className="absolute top-[15%] left-[-10%] text-left">
      <h2 className="text-6xl text-white font-serif">The</h2>
      <h1 className="text-9xl text-white font-serif">Ultimate</h1>
      <p className="text-xl text-white mt-2">Mid and long term</p>
    </div>
    
   
    <div className="absolute bottom-[20%] right-[-10%] text-right">
      <h3 className="text-6xl text-white font-serif">Rental</h3>
      <h3 className="text-6xl text-white font-serif">paradise.</h3>
    </div>
  </div>

  <section className="relative flex items-center h-screen  text-white">
      <div className="absolute inset-x-0 right-[10%] top-[0%] flex justify-center">
        <div className="h-[300px] w-[1px] bg-white"></div>
      </div>
      <div className="text-center">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-serif mb-4">
          "An all-inclusive resort living in Medellín"
        </h1>
        <p className="text-sm sm:text-base lg:text-lg font-serif">
          Fully furnished<br />Luxury apartments
        </p>
      </div>
    </section>
  </div>



  <div className="relative w-full h-screen  flex items-center justify-center">
  <div className="relative w-[900px] h-[450px] flex">
   
    <div className="absolute left-[160px] top-[80px] text-right z-10 w-1/2">
      <h1 className="text-5xl text-white font-serif leading-tight">
        Unmatch social-centric<br />
        building for nomads.
      </h1>
      <p className="text-lg text-white  mt-4">
        The first hypermenized residential project in town.
      </p>
    </div>

    <div className="absolute right-0 w-[40%] h-full overflow-hidden rounded-3xl">
      <img
        src="https://cms.kiinliving.com/uploads/attachments/clthpgiai008f6hqs3gad32b2-home002.webp"
        alt="Social space for nomads"
        className="w-full h-full object-cover"
      />
    </div>

    <img 
      src="https://kiinliving.com/C02.svg"
      alt="Decorative curve"
      className="absolute z-20 top-[-20%] right-[-50%] w-[140%] h-[140%] object-contain"
    />
  </div>
</div>


*

  <div className="relative w-full h-screen  flex items-center justify-center">
  <div className="relative w-[900px] h-[450px] flex">
   
    <div className="absolute left-[160px] top-[80px] text-right z-10 w-1/2">
      <h1 className="text-5xl text-white font-serif leading-tight">
        Unmatch social-centric<br />
        building for nomads.
      </h1>
      <p className="text-lg text-white  mt-4">
        The first hypermenized residential project in town.
      </p>
    </div>

    <div className="absolute right-0 w-[40%] h-full overflow-hidden rounded-3xl">
      <img
        src="https://cms.kiinliving.com/uploads/attachments/clthpgiai008f6hqs3gad32b2-home002.webp"
        alt="Social space for nomads"
        className="w-full h-full object-cover"
      />
    </div>

    <img 
      src="https://kiinliving.com/C02.svg"
      alt="Decorative curve"
      className="absolute z-20 top-[-20%] right-[-50%] w-[140%] h-[140%] object-contain"
    />
  </div>
</div> 
 */
const [menuOpen, setMenuOpen] = useState(false);
const rooms = [
  {title: 'Room Esencia', price:240000 , image:"https://github.com/rolandoto/image-pms/blob/main/Esencia/IMG_4580.JPG?raw=true", 
    features: ['Cama matrimonial', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV'] },
  {title: 'Room Dueto',price:218000, image: "https://github.com/rolandoto/image-pms/blob/main/Dueto/IMG_4588.JPG?raw=true", 
    features: ['Cama matrimonial', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV'] },
  {title: 'Room Trinidad',price:260000, image: "https://github.com/rolandoto/image-pms/blob/main/Trinidad/IMG_4530.JPG?raw=true", 
    features: ['Cama matrimonial', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV']}
];
/**
 * 
 *  
 * 
 */

const faqs = [
  {
    question: '¿Como hago para llegar al COLIVING?',
    answer: (
      <ul className="list-disc list-inside">
        <li>tenemos muchas opciones para llegar, rutas de buses y estamos ubicados a 2 cuadras de la estación san antonio del metro </li>
      </ul>
    ),
  },
  {
    question: '¿Como me puedo comunicar con el COLIVING?',
    answer: 'lina de atencion: 3182674142',
  },
  {
    question: '¿Que tan cerca esta el aeropouerto ?',
    answer: (
      <ul className="list-disc list-inside">
        <li>estamos a 40 minutos del aeropuerto </li>
      </ul>
    ),
  },
  {
    question: '¿Que tipo de APARTAMENTOS tiene ?',
    answer: 'aparta estudios para 1, 2 o 3 personas.',
  },
];

/**
 * 
 *   <video
              ref={videoRef}
              src="https://galleryhotel.co/static/media/vuelo.bc10cc2282c8f1da5fcc.mp4"
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              autoPlay
            />
 * 
 */

    return (
      <>
      <BookNowButton />
         <div className="relative w-full h-[1000px]">
            <img
              src="https://github.com/rolandoto/image-pms/blob/main/Trinidad/IMG_4530.JPG?raw=true"
              className="w-full h-full object-bottom" />
              <Header />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
              <h1 className="font-davinci text-4xl sm:text-6xl md:text-7xl mb-2 sm:mb-4"></h1>
                  <h2 className="font-lora text-5xl sm:text-7xl opacity-90 md:text-9xl">Civitas</h2>
                  <p className="mt-2 text-base opacity-90 md:text-xl lg:text-3xl font-lora font-normal">
                  vive una experiencia experiencia mas
                  </p>
                  {visible && (
                    <CalenderSearchHome 
                      HandClickMenuPeople={HandClickMenuPeople} 
                      formattedStartDateToString={formattedStartDateToString}
                      formattedEndDateToString={formattedEndDateToString}
                      HandClickMenuEnd={HandClickMenuEnd}
                      HandClickMenu={HandClickMenu}
                      onsubmit={PostHotelByIdHotel}
                      totalCountAdults={totalCountAdults}
                    />
                  )}
              <div className="hidden lg:block  ">
                {contextShowMenuPeople && 
                  <Search contextShowMenuPeople={contextShowMenuPeople}
                  top={650}
                  adults={adults}
                  childrem={childrem}
                  handChangeAdults={handChangeAdults}
                  handDecreaseAdults={handDecreaseAdults}
                  handChangeChildrem={handChangeChildrem}
                  handDecreaseChildren={handDecreaseChildren}
                  setContextShowMenuPeople={setContextShowMenuPeople}  />}
              </div>


          <div className="hidden lg:block  ">
              {contextMenuPosition && (
                <DateRange
                  className="flex  calender-search-home lg:hidden"
                  rangeColors={["#fbcfc0"]}
                  minDate={new Date()}
                  onChange={handleSelect}
                  editableDateInputs={false}
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
              <div class="  lg:hidden fixed inset-0 bg-white flex items-start justify-center z-50  md:shadow-[17px_20px_40px_rgba(0,0,0,0.21)] md:rounded-[1.25rem] md:!font-size[16px] md:!user-select-none">
                <div class="bg-white p-4  rounded-lg shadow-lg w-full h-full md:w-auto md:h-auto">
                  <button class="absolute top-4 right-4 text-black text-lg" onClick={() =>setContextMenuPosition(false)} ><IconRiCloseLargeLine /></button>
                 <div>
                    <h2 class="text-center text-2xl font-semibold mb-4">Selecionar fecha</h2>
                    <DateRange 
                          className="flex calender-search-home lg:hidden"
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
                     
                    </div>
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

        </div>
           
          </div>
          <TitleWelcome />
     
          <RoomPresentaion />
          <div ref={roomSectionRef} >   
            <RoomDetail ref={roomSectionRef}  rooms={rooms} />
          </div>
          <div ref={roomEventsSectionRef} >
            <Events  />
          </div>
          <AccordionAsk faqs={faqs} />
          <Footer />
    </>
    )   
}

export default Home