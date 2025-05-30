import React, { useEffect, useState }  from "react";
import Events from "../../Component/Events/Events";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import WhatsappButton from "../../Component/WhatsappButton/WhatsappButton";
import { Link } from "react-router-dom";
import { MainProduct, SectionSearch } from "../../Ui/Style/GeneralStyle";
import SearchGlobal from "../../Component/SearchGlobal/SearchGlobal";
import BookNowButton from "../../Component/BookNowButton/BookNowButton";
import FooterHome from "../../Component/Footer/FooterHome";
import { Helmet } from "react-helmet";

const EventsNext =()  =>{
    useEffect(() => {
        // Scrolls to the top of the document on component mount
        window.scrollTo(0, 0);
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);
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

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);



    return (<>
           
            <Header/>
            <Helmet>
              <title>Eventos  Black Friday - 10% de Descuento en hotel la naval</title>
              <meta name="description" content={`Reserva en hotel la naval y obtén un 10% de descuento con el código hotel la naval Oferta por tiempo limitado.`} />
              <meta name="keywords" content="hotel, descuento, reserva, promoción, alojamiento, oferta especial" />
              <meta property="og:title" content={`Código de Descuento hotel la naval`} />
              <meta property="og:description" content={`Aprovecha un 10% de descuento en hotel la naval.`} />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://www.hotellanaval.co/Accomodation" />
          </Helmet>
        
          <div className="p-2 lg:px-8">
  
        </div>
          
            <div className="lg:hidden flex  p-2 lg:px-8" >
              <MainProduct className="m-auto ">
                <div className="flex lg:w-[47%] w-[100%] justify-center bg-[#3f6969] rounded-[40px]  p-4  items-center space-x-1">
                  <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                  <span className=" text-white">Elegir un espacio
                  </span>
                </div>
               
              </MainProduct>
            </div>  
                <WhatsappButton />
            <Events />
            <FooterHome/>
        </>)

}

export default EventsNext