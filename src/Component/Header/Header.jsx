import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SectionSearch } from "../../Ui/Style/GeneralStyle";
import { RxHamburgerMenu } from "react-icons/rx";

const Header =() =>{

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

    return (
        <SectionSearch  >
        <header
           className={`fixed z-50 top-0 left-0 right-0 transition-colors duration-300 ${
             scrolled ? "bg-[#4141416c] text-white" : "bg-[#4141416c] text-white"
           }`}
         >
           <nav className="border-b p-2 border-white flex justify-between items-center space-x-6 max-w-[97%] mx-auto">
             <div className="text-2xl sm:text-3xl font-lora"><Link to="/"  >  Hotel la naval          </Link> </div>
             <div className="hidden md:flex space-x-6">
               <Link to="/" className="text-[15px] hover:underline">
               Inicio
               </Link>
               <a href="/Events" className="text-[15px]hover:underline">
               Próximos eventos
               </a>
               <Link to="/Accomodation" className="text-[15px] hover:underline">
               Reservas
           </Link>
             
             </div>
             <a  
              target="_blank"
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.1140114412774!2d-75.55539411466032!3d10.41251883929769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62f72b66002b9%3A0x76539e8c61b4b58b!2sCra.%202%20%2313-79%202da%2C%20Cartagena%20de%20Indias%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1740702510717!5m2!1ses!2sco"
             className="bg-black text-white rounded-full px-3 sm:px-4 py-2 text-xs sm:text-base">
               COMO LLEGAR
             </a>
             <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
               <RxHamburgerMenu color="white" fontSize={25} />
             </button>
           </nav>
          {menuOpen && (
              <div className="md:hidden bg-[#4141416c] text-white py-2">
              <Link to="/" className="block px-4 py-2 ">
              Inicio
              </Link>
              <a href="/Events" className="block px-4 py-2 ">
              Próximos eventos
              </a>
              <Link to="/Accomodation" className="block px-4 py-2  text-[15px] hover:underline">
                  Reservas
                  </Link>
                    
            </div>
          )}
        </header>         
     </SectionSearch>
    )

}

export default Header