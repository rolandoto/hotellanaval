import React from "react"
import {  IconFaFacebookF, IconFaInstagram, IconFaMapMarkerAlt, IconFaWhatsapp, IconFaYoutube, IconsMdEmail } from "../Icons/Icons"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import pdf from "../../Image/contracto.pdf"

const FooterHome =({PostHotelByIdHotel}) =>{

    const handleFacebook = () => {
        window.open("https://www.facebook.com/hotel47medellinstreet", "_blank");
    };

    const handleInstagram = () => {
        window.open("https://www.instagram.com/hotel47medellinstreet/", "_blank");
    };

    /**
     * 
     * <div className="w-[350px] lg:w-[280px] lg:w-122 " >
                            <div className="flex justify-center space-x-4 mt-4">
                                <IconFaInstagram   onclick={handleInstagram} />
                                <IconFaFacebookF  onclick={handleFacebook} />
                            </div>
                    </div>
     * 
     */

    return (
      <>
      
      <div className=" bg-gray-800 relative bg-cover bg-center h-[700px] md:h-[400px] flex items-center justify-center text-white">
  <div className="relative z-10 flex flex-col md:flex-row md:justify-between items-center w-full px-5 md:px-10 lg:px-20">
    <div className="md:w-[300px] w-full">
      <h1 className="text-3xl md:text-4xl font-bold">Hotel la naval</h1>
      
      <button
        onClick={PostHotelByIdHotel}
        className="m-auto mt-8 w-full px-8 py-4 bg-gray-900 text-white transition-colors"
      >
        Reservar
      </button>
    </div>

    <div className="mt-5 md:mt-0 md:w-1/2 w-full">
      <h2 className="text-lg font-semibold">Contacto</h2>
      <div className="flex items-center mt-4">
        <span><FaPhoneAlt color="white" /></span>
        <p className="ml-2">+57 3006528417</p>
      </div>
      <div className="flex items-center mt-2">
        <span>✉️</span>
        <p className="ml-2">hotellanaval@gmail.com</p>
      </div>
      <div className="flex items-center mt-2">
        <span>📍</span>
        <p className="ml-2">Cra 2da Av. San martín N° 13-79 barrio bocagrande</p>
      </div>
      <div className="flex space-x-4 mt-4">
        <div aria-label="Facebook" className="text-white text-2xl">
          <div className="flex justify-center space-x-4">
          
          </div>
        </div>
      </div>
    </div>

      <div className="md:absolute flex  bottom-0   right-[130px] w-40 h-[100px] md:w-60 md:h-60">
        <div className="map-container" style={{ width: "100%", height: "100%" }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.1140114412774!2d-75.55539411466032!3d10.41251883929769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62f72b66002b9%3A0x76539e8c61b4b58b!2sCra.%202%20%2313-79%202da%2C%20Cartagena%20de%20Indias%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1740702510717!5m2!1ses!2sco"
            width="120%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
      <footer className=" m-auto max-w-7xl justify-between bottom-0 md:flex block  right-0 left-0  absolute text-center text-white py-4">
        <p>© Copyright. Todos los derechos reservados.</p>
        <a target="_blank" href={pdf} className="text-white"> Términos y Condiciones del sitio web.</a>
       
        <a target="_blank"  className="text-white">Política de tratamiento de datos</a>
      </footer>
  </div>

    </>
    )
}
export default FooterHome