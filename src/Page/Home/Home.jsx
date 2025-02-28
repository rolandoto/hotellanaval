import React, { useCallback, useEffect, useRef, useState } from "react"
import UseCalenderSearch from "../../Hooks/UseCalenderSearch";
import { DateRange } from 'react-date-range';
import esLocale from 'date-fns/locale/es';
import Search from "../../Component/Search/Search";
import {useNavigate } from "react-router-dom";
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
import { BsTagFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
import { PiCallBellFill } from "react-icons/pi";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import FooterHome from "../../Component/Footer/FooterHome";


function RegistroModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
      nombre: '',
      correo: '',
      telefono: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
      const { name, value } = e.target;
      
      // Validación para permitir solo números en el campo de teléfono
      if (name === "telefono" && !/^\d*$/.test(value)) {
          setErrors({ ...errors, telefono: "Solo se permiten números" });
          return;
      } else {
          setErrors({ ...errors, telefono: "" });
      }
      
      setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      // Validación para asegurarse de que el teléfono solo tenga números y no esté vacío
      if (!/^\d+$/.test(formData.telefono)) {
          setErrors({ ...errors, telefono: "El número de teléfono debe contener solo dígitos" });
          return;
      }

      console.log('Datos enviados:', formData);
      onClose(); // Cierra el modal después del envío
  };

  if (!isOpen) return null;

  return (
      <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Registro</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                      <label className="block text-sm font-medium text-gray-700">Nombre</label>
                      <input
                          type="text"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                          required
                      />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700">Correo</label>
                      <input
                          type="email"
                          name="correo"
                          value={formData.correo}
                          onChange={handleChange}
                          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                          required
                      />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                      <input
                          type="tel"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                          required
                      />
                      {errors.telefono && (
                          <p className="text-red-500 text-sm">{errors.telefono}</p>
                      )}
                  </div>
                  <div className="flex justify-end mt-4">
                      <button
                          type="button"
                          onClick={onClose}
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2"
                      >
                          Cancelar
                      </button>
                      <button
                          type="submit"
                          className="px-4 py-2 bg-blue-600 text-white rounded-md"
                      >
                          Enviar
                      </button>
                  </div>
              </form>
          </div>
      </div>
  );
}


function Counter({ targetNumber, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconectar una vez que el elemento es visible
        }
      },
      { threshold: 0.5 } // Ajusta este valor según cuándo deseas activar el contador
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && count < targetNumber) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= targetNumber) {
            clearInterval(interval);
            return targetNumber;
          }
          return prevCount + 1;
        });
      }, 50); // Ajusta la velocidad del conteo aquí
      return () => clearInterval(interval);
    }
  }, [isVisible, count, targetNumber]);

  return (
    <div ref={ref} className="flex-1 flex flex-col items-center justify-center p-5 md:p-10 z-50 hover:text-white hover:bg-[#002f6c] text-[#002f6c]">
      <p className="text-4xl md:text-6xl">{count}</p>
      <p className="text-xs md:text-sm">{label}</p>
    </div>
  );
}



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
		return hotel.id_hotel ==26
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
  
  /*const features = [
      { icon: <IconsFaGlassMartini/>, title: 'Cóctel de bienvenida' },
      { icon: <IconsGiForkKnifeSpoon/>, title: 'Desayuno incluido' },
      { icon: <IconsFaConciergeBell/>, title: 'Recepción 24 horas' },
      { icon: <IconsaCar/>, title: 'Variedad de transporte', description: 'Metro, tranvía, autobús, taxi' },
      { icon: <IconsRiBankFill/>, title: 'Vida cultural y nocturna', description: 'Bares, museos, restaurantes' },
      { icon: <IconsFaSquareParking/>, title: 'Parqueadero gratis*', description: 'Sujeto a disponibilidad' },
      { icon: <IconsGiForkKnifeSpoon/>, title: 'Restaurante - Bar  ', description: ' con vista panorámica' },
      { icon: <IconsFaStore/>, title: 'Alianzas comerciales', description: 'Servicio de taxi, gimnasio, tours, médico, comunicaciones.' },
      { icon: <IconsFaBanSmoking/>, title: 'Espacios libre de humo', description: "" },
    ];*/

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

    const faqs = [
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
      {title: 'SENCILLA',
          roomTypeDescription: " <span> Habitación perfecta para viajeros solitarios o parejas en busca de confort y economía. Aquí encontrarás una cómoda cama doble para descansar, con ventilador, televisión Smart TV para entretenerse, Wi-Fi gratuito para mantenerte conectado, y un baño privado </span>", 
          price:90000 , 
          image:"https://github.com/rolandoto/image-pms/blob/main/Logos/WhatsApp%20Image%202025-02-17%20at%207.55.20%20PM.jpeg?raw=true"},
      {title: ' TRIPLE',
      roomTypeDescription: " <span> Habitación con cama doble, aire acondicionado para mantener la temperatura ideal, televisor Smart TV para entretenerse, Wi-Fi gratuito para mantenerte conectado, y un baño privado con ducha y todas las comodidades necesarias para tu comodidad.</span>", 
      price:140000, image: "https://github.com/rolandoto/image-pms/blob/main/Logos/WhatsApp%20Image%202025-02-17%20at%207.55.20%20PM.jpeg?raw=true" },
      {title: 'MULTIPLE',
      roomTypeDescription: "<span>La Habitación con Jacuzzi te ofrece todo lo necesario para una experiencia de relajación sin igual en el corazón de Medellín. Habitación con cama doble, aire acondicionado, televisión Smart TV, Wi-Fi gratuito para mantenerte conectado, y un baño privado con ducha</span>", 
      price:180000, image: "https://github.com/rolandoto/image-pms/blob/main/Logos/WhatsApp%20Image%202025-02-17%20at%207.55.20%20PM.jpeg?raw=true"}, 
      
    ];

    const monthsToShow = window.innerWidth >= 700 ? 2 : 1; // Cambia 768 según tu punto de ruptura deseado

/**
 * 
 *    <div className="max-w-7xl mx-auto py-8">
              <h2 className="text-[30px] text-center text-orange-500  font-lora  mb-6">Lo que opinan nuestros clientes</h2>
              <div className="block md:flex" >
                    <div className="flex items-center justify-center ">
                      <div className="max-w-sm p-6">
                        <div className="flex items-center">
                          <img
                            className="w-12 h-12 rounded-full"
                            src="https://github.com/rolandoto/image-pms/blob/main/2020-06-27.jpg?raw=true"
                            alt="Hotel"
                          />
                          <div className="ml-4">
                            <h2 className="text-lg font-semibold">Gallery Hotel Medellín</h2>
                            <div className="flex items-center">
                              <span className="text-orange-500 text-lg font-bold">4.0</span>
                              <div className="flex ml-1">
                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600">Basado en 600 reseñas.</p>
                            <p className="text-sm text-gray-500 mt-2">powered by <span className="text-gray-700 font-semibold">Google</span></p>
                          </div>
                        </div>
                        <a target="_blank" href="https://www.google.com/search?hl=en-CO&gl=co&q=Gallery+Hotel+Medell%C3%ADn,+Cl.+47+%2341-55,+La+Candelaria,+Medell%C3%ADn,+La+Candelaria,+Medell%C3%ADn,+Antioquia&ludocid=13557792269951917256&lsig=AB86z5Xi3QsXtAp5vxVbKW_n47sq#lrd=0x8e4428575a0dc0d1:0xbc26f43cbd055cc8,3" className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center">

                          valóranos en <span className="ml-1 font-semibold"><svg viewBox="0 0 512 512" height="18" width="18"><g fill="none" fill-rule="evenodd"><path d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z" fill="#4285f4"></path><path d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z" fill="#34a853"></path><path d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z" fill="#fbbc05"></path><path d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z" fill="#ea4335"></path><path d="M20 20h472v472H20V20z"></path></g></svg></span>
                        </a>
                      </div>
                            </div>
              <div className="flex overflow-x-scroll space-x-4">
                {reviews.map((review) => (
                  <div key={review.id} className="min-w-[250px] max-w-[250px] p-4 bg-white shadow rounded-lg">
                    <div className="flex items-center space-x-2 mb-4">
                      <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full" />
                      <div>
                        <h3 className="font-semibold">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((star, index) => (
                        
                        <svg className={`w-5 h-5  ${index < review.rating ?" text-orange-500" :"text-gray-300"} `} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                      </svg>
                       
                      ))}
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))}
              </div>


            </div>
          </div>
 *  <div className="relative bg-cover bg-center h-[650px]" style={{ 
                    backgroundImage: `url(https://grupo-hoteles.com/storage/app/2/page/1205002298-2-page-slider-1-habitacion-deluxe-centro-de-medellin-antioquia-colombia.webp)`,}}>
                <div className="absolute inset-0 bg-black opacity-15"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <h1 className="text-4xl md:text-6xl lg:text-6xl font-lora">
                      {loadingHotel ?"cargando " :hotel?.nombre}  
                    </h1>
                    <p className="mt-2 text-base md:text-xl lg:text-3xl font-lora font-normal">
                        Más que un hotel, una experiencia artística
                    </p>
                    <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-black" onClick={scrollToRoomSection}>
                        Ver habitaciones
                    </button>
                </div>
            </div>

               <CalenderSearchHome HandClickMenuPeople={HandClickMenuPeople} 
                                 formattedStartDateToString={formattedStartDateToString}
                                 formattedEndDateToString={formattedEndDateToString}
                                  HandClickMenuEnd={HandClickMenuEnd}
                                  HandClickMenu={HandClickMenu}
                                  onsubmit={PostHotelByIdHotel}
                                  totalCountAdults={totalCountAdults}/>
 <Header  scrollToRoomSectionEvent={scrollToRoomSectionEvent}   />

 */


 const slides = [
  {
    title: 'Viaje en familia',
    description: "Nuestro hotel en el corazón de Medellín te ofrece pequeños apartamentos ideales para familias, equipados con cocina, nevera y todas las comodidades que necesitas para sentirte como en casa. Vive una experiencia inolvidable mientras exploras la ciudad, con el espacio y confort perfectos para tu estancia. ¡Tu hogar lejos de casa te espera!    ",
    image: 'https://raw.githubusercontent.com/rolandoto/image-pms/main/1155970062-4-page-slider-1-Habitacion-todos-jacuzzi-ventilador-centro-de-medellin-antioquia-colombia.webp',
  },
  {
    title: 'Turismo Médico',
    description: 'Si vienes a Medellín por motivos de turismo médico, nuestro hotel es la elección ideal. Estamos cerca de las principales clínicas y centros de salud de la ciudad, y te ofrecemos un ambiente tranquilo y cómodo para tu recuperación.   Además, nuestras instalaciones están diseñadas para proporcionar el descanso y la atención que necesitas durante tu proceso de recuperación    ',
    image: 'https://raw.githubusercontent.com/rolandoto/image-pms/main/1155970062-4-page-slider-1-Habitacion-todos-jacuzzi-ventilador-centro-de-medellin-antioquia-colombia.webp',
  },
  {
    title: 'Viajes de larga duración    ',
    description: 'Si planeas una estancia prolongada, nuestro hotel te ofrece todo lo que necesitas para sentirte como en casa. Con instalaciones diseñadas para hacer tu vida más cómoda, una ubicación ideal para explorar la ciudad, y servicios que cubren todas tus necesidades, seremos tu hogar lejos de casa durante todo el tiempo que necesites.    ',
    image: 'https://raw.githubusercontent.com/rolandoto/image-pms/main/1155970062-4-page-slider-1-Habitacion-todos-jacuzzi-ventilador-centro-de-medellin-antioquia-colombia.webp',
  },
  // Add more slides as needed
];

const [currentSlide, setCurrentSlide] = useState(0);
const [fade, setFade] = useState(true); // Estado para manejar la opacidad

const handlePrev = () => {
  setFade(false); // Inicia el efecto de desvanecimiento
  setTimeout(() => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    setFade(true); // Restaura la opacidad después de cambiar el slide
  }, 500); // Espera 500ms antes de cambiar el slide para completar el fade-out
};

const handleNext = () => {
  setFade(false); // Inicia el efecto de desvanecimiento
  setTimeout(() => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    setFade(true); // Restaura la opacidad después de cambiar el slide
  }, 500); // Espera 500ms antes de cambiar el slide para completar el fade-out
};
 const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);



const [currentIndex, setCurrentIndex] = useState(0);

  // función para avanzar
  const nextSlide = () => {
    if (currentIndex < rooms.length - 2) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // función para retroceder
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  

  const hotelReferid = [
    {
      description: "Viaje de Negocios",
      image: 'https://github.com/rolandoto/image-pms/blob/main/Logos/47street.jpg?raw=true', // Replace with actual image URL
      url: 'https://47medellinstreethotel.com/',
    
    },
    {
      description: "Viaje romántico en pareja",
      image: 'https://github.com/rolandoto/image-pms/blob/main/MG_8648-scaled.jpg?raw=true', // Replace with actual image URL
      url: 'https://galleryhotel.co/',
    },
    {
      description: "Viaje Turismo de Salud",
      image: 'https://github.com/rolandoto/image-pms/blob/main/_MG_0188%20(1).jpg?raw=true', // Replace with actual image URL
      url: 'https://appartments.com.co/',
    }
  ];

  
  const features = [
    {
      title: "Desayuno incluido",
      image: "https://github.com/rolandoto/image-pms/blob/main/hotel-la-naval_15531520546.jpg?raw=true",
    },
    {
      title: "Parqueadero privado",
      image: "https://github.com/rolandoto/image-pms/blob/main/hotel-la-naval_15531520544.jpg?raw=true",
    },
    {
      title: "Centro de negocios",
      image: "https://github.com/rolandoto/image-pms/blob/main/hotel-la-naval_15531520547.jpg?raw=true",
    },
    {
      title: "Recepción 24 horas",
      image: "https://github.com/rolandoto/image-pms/blob/main/WhatsApp%20Image%202025-02-01%20at%2010.30.43%20PM%20(1).jpeg?raw=true",
    },
  ];

  const [isExpanded, setIsExpanded] = useState(true);


    return (
        <div>
          {FillContent}
           <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://github.com/rolandoto/image-pms/blob/main/hotel-la-naval_155315206030.jpg?raw=true')" }} // Asegúrate de que la imagen esté en la carpeta `public`
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="relative m-auto max-w-7xl z-10 flex flex-col items-start justify-start  md:justify-center  h-full text-white px-4 text-center">
      <p className="text-sm text-left  md:text-base lg:text-lg  font-bold uppercase mb-2">
        El hotel ideal para viajes de vacaciones en cartagena
      </p>
      <h1 className="text-[50px] sm:text-[70px] md:text-[80px] text-left lg:text-[90px] mb-8">
        Hotel La naval
      </h1>
    </div>

      <div className="absolute md:p-0  pr-10  pl-10   max-w-7xl mx-auto bottom-0 left-0 right-0 flex flex-col md:flex-row">
      <div  onClick={scrollToRoomSectionEvent} className="flex-1 flex flex-col items-center justify-center p-5 md:p-10 cursor-pointer z-50 hover:bg-[#002f6c] bg-gray-800 text-white  md:mb-0">
        <i className="text-4xl mb-4">
          <BsTagFill fontSize={40} />
        </i>
        <p className="text-center text-base md:text-lg font-medium">
          Programa Viajero Frecuente
        </p>
      </div>
      <div  onClick={scrollToRoomSection} className="flex-1 flex flex-col items-center justify-center p-5 md:p-5 cursor-pointer z-50 hover:bg-[#002f6c] bg-gray-800 text-white  md:mb-0">
        <i className="text-4xl ">
          <FaUserTie fontSize={40} />
        </i>
        <p className="text-center text-base md:text-[16px] font-medium">
          Centro de Negocios
        </p>
      </div>
      <div  onClick={scrollToRoomSection} className="flex-1 flex flex-col items-center justify-center p-5 md:p-5 cursor-pointer z-50 hover:bg-[#002f6c] bg-gray-800 text-white  md:mb-0">
        <i className="text-4xl ">
          <FaParking fontSize={40} />
        </i>
        <p className="text-center text-base md:text-[16px] font-medium">
          Parqueadero
        </p>
      </div>
      <div
        onClick={PostHotelByIdHotel}
        className="flex-1 flex flex-col items-center justify-center p-5 md:p-10 cursor-pointer z-50 bg-[#002f6c] text-white"
      >
        <i className="text-4xl mb-4">
          <PiCallBellFill fontSize={40} />
        </i>
        <p className="text-center text-base md:text-[16px] font-medium">Reservar</p>
      </div>
    </div>
    </div>
             

         
          <div className="hidden lg:block  ">
              {contextMenuPosition && (
                <DateRange
                  className="flex  calender-search-home lg:hidden"
                  rangeColors={["rgb(255 104 0 / 36%);"]}
                  minDate={new Date()}
                  onChange={handleSelect}
                  editableDateInputs={true}
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
                  showDateDisplay={true}
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
                          editableDateInputs={true}
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
                          showDateDisplay={true}
                          ranges={state}
                          direction="horizontal"
                          locale={esLocale}
                      />
                     
                    </div>
                    <button
                      className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-black"
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
              <div className="hidden lg:block  ">
                {contextShowMenuPeople && 
                  <Search contextShowMenuPeople={contextShowMenuPeople}
                  top={715}
                  adults={adults}
                  childrem={childrem}
                  handChangeAdults={handChangeAdults}
                  handDecreaseAdults={handDecreaseAdults}
                  handChangeChildrem={handChangeChildrem}
                  handDecreaseChildren={handDecreaseChildren}
                  setContextShowMenuPeople={setContextShowMenuPeople}  />}
              </div>
             
              <div className="flex flex-col  m-auto max-w-7xl md:flex-row items-center justify-center p-8 bg-white">
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 flex justify-start ">
                  <img
  src="https://github.com/rolandoto/image-pms/blob/main/hotel-la-naval_155315206030.jpg?raw=true"
  alt="Hotel La Naval en Cartagena"
  className="w-full md:w-[80%] lg:w-[70%] h-[400px] md:h-[500px] lg:h-[650px] object-cover rounded-lg shadow-lg mx-auto"
/>
                  </div>

                  {/* Text Section */}
                  <div className="w-full text-center mt-5  pl-0 md:pl-12">
                  <div className="w-full text-center mt-5 pl-0 md:pl-12">
                    <h2 className="md:text-center md:text-[35px] text-justify leading-tight text-[20px] text-[#002f6c]">
                      Disfruta de unas vacaciones inolvidables en el Hotel La Naval en Cartagena
                    </h2>
                    <div className="m-auto max-w-4xl md:mt-16 mt-0">
                      <p className="text-[#666666] font-sans md:w-[70%] w-[100%] m-auto text-justify">
                        Ubicado en el corazón de Cartagena, nuestro hotel es el destino ideal para quienes buscan relajarse.
                      </p>
                      
                    </div>
                  </div>

                    {/* Stats Section */}
                    <div className="max-w-7xl mt-9 mx-auto flex flex-wrap md:flex-nowrap bottom-4 left-0 right-0 cursor-pointer">
                    <Counter targetNumber={40} label="HABITACIONES SENCILLAS" />
                    <Counter targetNumber={3} label="HABITACIONES TRIPLE" />
                    <Counter targetNumber={14} label="HABITACIONES MULTIPLE" />
                  </div>
                  </div>
                </div>

                <div className="bg-gray-100 min-h-screen p-8">
      {/* encabezado */}
      <header className=" max-w-7xl m-auto mb-8 text-start">
        <p className="font-bold text-[#333333]">Hotel la naval</p>
        <h1 className="text-[40px] md:text-[80px]  text-blue-900">Hotel naval</h1>
      </header>

      <section className="flex max-w-7xl m-auto flex-col md:flex-row justify-center items-center gap-8">
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="p-2   text-white disabled:opacity-50"
      >
        <AiOutlineLeft color="black" fontSize={30}  />
      </button>
      {rooms.slice(currentIndex, currentIndex + 2).map((item, index) => (
  <div key={index} className="bg-white shadow-lg overflow-hidden">
    <div className="relative">
      <img
        src={item.image}
        alt={item.title || "business room"}
        className="w-[850px] h-[350px] object-cover"
      />
    </div>
    <div className="p-4 text-center">

      <h2 className="text-blue-900 text-[20px]  sm:text-[20px] md:text-[20px] font-bold ">{item.title}</h2>
      <p
        className="text-gray-600 mt-4 text-justify  "
        dangerouslySetInnerHTML={{ __html: item.roomTypeDescription }}
      ></p>


      <p className="text-blue-900 font-bold ">
        ${(item.price).toLocaleString('es-CO')} COP (IVA incluido)
      </p>

      <button onClick={PostHotelByIdHotel} className=" m-auto mt-8 w-full px-8 py-4 bg-[#002f6c] text-white hover:bg-[#002f6c] transition-colors">
        Reservar
      </button>
    </div>
   
  </div>
))}
      <button
        onClick={nextSlide}
        disabled={currentIndex >= rooms.length - 2}
        className="p-2  text-white disabled:opacity-50"
      >
        <AiOutlineRight color="black" fontSize={30} />
      </button>
    </section>
    </div>

    <div ref={roomSectionRef} >
      <section className="max-w-full m-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-[550px] object-cover "
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg opacity-100 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold text-xl">{feature.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>

    <div className="min-h-screen bg-gray-50 p-6 md:p-12" ref={roomEventsSectionRef} >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8">
          {/* Header Section */}
          <div className="space-y-2">
            <p className="text-sm uppercase text-gray-600">SOLO BENEFICIOS</p>
            <h1 className="text-4xl md:text-5xl  text-blue-900">
              Programa para viajeros frecuentes
            </h1>
          </div>

          {/* Benefits Card */}
          <div className="rounded-lg  p-6 space-y-6">
          <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between rounded-lg  transition-colors">
              <span className="text-[20px] font-bold text-gray-900">
             Hotel naval
              </span>
              {isExpanded && <>
              <svg 
                className={`w-5 h-5 text-black transition-transform  'transform rotate-45' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 4v16m8-8H4" 
                />
              </svg>
              </>}
            </button>
            {!isExpanded && (<>
            <p className="text-gray-600">
              Como agradecimiento por su preferencia, queremos ofrecerle beneficios exclusivos.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                <span className="text-gray-700">Disfrute de descuentos en sus próximas reservas</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                <span className="text-gray-700">Upgrades de habitación</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                <span className="text-gray-700">Acceso a servicios </span>
              </li>
            </ul>
            <p className="text-gray-700">
              ¡Descubra todas las ventajas!
            </p>
            </>)}
          </div>
          {/* Expandable Section */}
          <div className="space-y-4">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between p-4 rounded-lg  transition-colors">
              <span className="text-[20px] font-bold text-gray-900">
                Espacios flexibles para sus negocios
              </span>
              {!isExpanded && <>
              <svg 
                className={`w-5 h-5 text-black transition-transform   'transform rotate-45' ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 4v16m8-8H4" 
                />
              </svg>
              </>}
            </button>
            
            {isExpanded && (
              <div className="p-4  rounded-lg ">
                <p className="text-gray-700">
                  Organice reuniones productivas y eventos inolvidables en nuestros espacios equipados con proyector, internet y estacionamiento privado.
                </p>
              </div>
            )}
            <button onClick={openModal} className="w-full md:w-auto px-6 py-3 bg-gray-900 text-white  hover:bg-gray-800 transition-colors">
              Deseo registrarme
            </button>
          </div>
        </div>


        <RegistroModal isOpen={isModalOpen} onClose={closeModal} />

        <div className="relative h-[600px]  overflow-hidden">
          <img 
            src="https://github.com/rolandoto/image-pms/blob/main/hotel-la-naval_15531520545.jpg?raw=true"
            alt="Business lounge with comfortable seating and city view"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto py-8">
        <h2 className=" md:text-[30px] text-[25px] text-center text-blue-900  font-lora  mb-6">Nos encantaría mejorar. ¡Compártenos su experiencia!</h2>
              <div className="block " >
                    <div className="flex items-center justify-center ">
                      <div className="max-w-sm p-6">
                        <div className="flex items-center">
                          <img
                            className="w-12 h-12 rounded-full"
                            src="https://github.com/rolandoto/image-pms/blob/main/hotel-la-naval_155315206030.jpg?raw=true"
                            alt="Hotel"
                          />
                          <div className="ml-4">
                            <h2 className="text-lg tex-blue-900 font-semibold">Hotel la naval</h2>
                            <div className="flex items-center">
                              <span className="text-blue-900 text-lg font-bold">3.9</span>
                              <div className="flex ml-1">
                                <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                                <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                                <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                                <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600">Basado en 1,458 reseñas.</p>
                            <p className="text-sm text-gray-500 mt-2">powered by <span className="text-gray-700 font-semibold">Google</span></p>
                          </div>
                        </div>
                        <a target="_blank" href="https://www.google.com/search?q=hotel+la+naval&sca_esv=afb125d5b9b6df66&rlz=1C1YTUH_esCO1016CO1016&sxsrf=AHTn8zpuZu1HWZKLVtOAPcBBVgfnoERSSw%3A1740769133446&ei=bQfCZ6z7Gp2xkvQP3OWIwQI&ved=0ahUKEwjs5dauhueLAxWdmIQIHdwyIigQ4dUDCBA&uact=5&oq=hotel+la+naval&gs_lp=Egxnd3Mtd2l6LXNlcnAiDmhvdGVsIGxhIG5hdmFsMgoQIxiABBgnGIoFMgQQIxgnMhQQLhiABBjHARiYBRiZBRjLARivATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIEEAAYHjIEEAAYHjIEEAAYHjIGEAAYBRgeSK8sUPoHWNgqcAV4ApABAJgB7wGgAbEQqgEGMC4xMS4yuAEDyAEA-AEBmAIOoALxCsICBBAAGEfCAgoQABiwAxjWBBhHwgIOEAAYgAQYsAMYkgMYigXCAhAQABiABBiwAxhDGMkDGIoFwgIGEAAYBxgewgIHEAAYgAQYDcICCBAAGIAEGKIEwgIFEAAY7wXCAgcQIxiwAxgnwgIHECMYsAIYJ8ICExAuGIAEGMcBGJgFGJkFGA0YrwHCAgYQABgNGB7CAggQABgFGA0YHpgDAOIDBRIBMSBAiAYBkAYKkgcFNi42LjKgB61g&sclient=gws-wiz-serp#lrd=0x8ef62f12ab1e81e3:0xf1de5621d5ae7ca4,3,,,," className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center">

                          valóranos en <span className="ml-1 font-semibold"><svg viewBox="0 0 512 512" height="18" width="18"><g fill="none" fill-rule="evenodd"><path d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z" fill="#4285f4"></path><path d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z" fill="#34a853"></path><path d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z" fill="#fbbc05"></path><path d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z" fill="#ea4335"></path><path d="M20 20h472v472H20V20z"></path></g></svg></span>
                        </a>
                      </div>
                            </div>
    
                            </div>
    
    </div>
    

    
    <div
      className="relative h-[910px] bg-cover bg-center"
      style={{ backgroundImage: 'url("https://github.com/rolandoto/image-pms/blob/main/hotel-la-naval_155315206030.jpg?raw=true")' }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      

      <div className="absolute xl:top-1/4 top-[90px] text-white max-w-lg px-6">
    <h1 className="text-4xl xl:text-6xl font-bold leading-tight">
      ¡Queremos que tu estancia sea inolvidable!
    </h1>
    <p className="mt-4  text-justify text-base  xl:text-lg">
      Por eso, te invitamos a descubrir otros rincones de la ciudad y a conocer nuevos lugares.
    </p>
    <p className="mt-2 text-base xl:text-lg">
      ¡Consulta nuestras recomendaciones de hoteles para vivir una experiencia inolvidable!
    </p>
  </div>

      {/* Image Cards */}
      <div className="absolute  lg:top-1/4 top-[410px] left-0 right-8 flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-end space-y-4 xl:space-y-0 xl:space-x-4">
       
      </div>

    </div>
          {subtotal >0 &&<Cart    /> } 
          <WhatsappButton />
            <FooterHome  PostHotelByIdHotel={PostHotelByIdHotel} />
          </div>
    )   
}

export default Home