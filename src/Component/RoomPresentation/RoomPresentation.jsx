import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
const RoomPresentaion =() =>{
    const navigate = useNavigate();

    const HandNext = () =>{
        navigate("/Accomodation");
    }

    return (  <div className="bg-white py-12 px-4">
                <div className="container mx-auto max-w-7xl   flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-4 text-">
                    <h2 className="text-3xl font-normal text-center  text-black text-[30px] font-lora ">Reserva tu habitación hoy mismo</h2>
                    <p className="text-gray-700 text-justify mt-8 mb-4">
                        Nuestras habitaciones están diseñadas para ofrecer el equilibrio perfecto entre comodidad y estilo, mientras te sumergen en la vibrante escena artística de Medellín. Cada espacio cuenta con obras de artistas locales, creando un ambiente único e inspirador que celebra la creatividad de la ciudad. Ubicado en el corazón de Medellín, Civitas  es el lugar ideal para explorar la animada vida nocturna, los restaurantes y bares de moda, y toda la oferta cultural que esta ciudad tiene para ofrecer.
                    </p>
                    <p className="text-gray-700 text-justify mb-4">
                    Desde la comodidad de tu habitación, puedes vivir la cultura y el arte de Medellín de una manera auténtica. Nuestra comunidad de coliving te brinda la oportunidad de conectar con otros viajeros, compartir experiencias y disfrutar del entorno urbano en un espacio que se siente como un hogar, con toda la energía y el espíritu de esta ciudad vibrante.
                    </p>
                    <button onClick={HandNext}  className="text-white rounded-full items-center  justify-center flex   bg-black  mt-4  w-[200px] p-3  ">
                       
                        Reservar   <FiArrowRight fontSize={23}/> </button>
                </div>
                <div className="md:w-1/2 p-4">
                <img 
                    src="https://github.com/rolandoto/image-pms/blob/main/Trinidad/IMG_4526.JPG?raw=true" 
                    alt="Reservation" 
                    width="600" 
                    height="400" 
                    className="w-full rounded-3xl shadow-lg" 
                />
                </div>
                </div>
            </div>)
  

}

export default RoomPresentaion