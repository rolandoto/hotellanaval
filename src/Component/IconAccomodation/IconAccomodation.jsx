import React from "react" 
import { ContainerIcons } from "../../Ui/Style/GeneralStyle"
import { IconShower, IconTowels, IconsPiBedThin, IconsSnow, IconsTv, IconsWifi } from "../Icons/Icons"

const IconAccomodation =({title}) =>{
    
    const rooms = [
        {  title: 'Room Box Ventilador', price:99000 , image:"https://grupo-hoteles.com/storage/app/4/rooms/203289556-10-rooms-slider-1-habitacion_Estandar_Hotel_en_Medellin_Gallery_Hotel-01.webp", 
            features: ['Cama matrimonial', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV'] },
        { title: 'Room Box Aire',price:109000, image: "https://grupo-hoteles.com/storage/app/4/rooms/1046121300-11-rooms-slider-1-habitacion_Aire_Hotel_en_Medellin_Gallery_Hotel-01.webp", 
        features: ['Cama matrimonial', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV','Aire Acondicionado'] },
        { title: 'Room Box Jacuzzi',price:169000, image: "https://grupo-hoteles.com/storage/app/4/rooms/1563326590-12-rooms-slider-1-habitacion_Jacuzzi_Hotel_en_Medellin_Gallery_Hotel-02.webp", features: ['Cama matrimonial', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV','Aire Acondicionado','Jacuzzi'] },
      ];


      /**
       * 
       *   {title != "Box Ventilador"  &&  
                    <div className="flex items-center" >
                    <IconsSnow  /> <span span className="ml-2">Aire acondicionado</span>
                    </div> }  
       * 
       */


    return (  <ContainerIcons  >

              
                    <div className="flex items-center" >
                        <IconsPiBedThin /> <span span className="ml-2">Cama matrimonial</span>
                    </div>
                    <div className="flex items-center" >
                    <IconShower  /> <span className="ml-2">Baño privado con ducha</span>
                    </div>
                    <div className="flex items-center" >
                    <IconsTv /> <span span className="ml-2">Smart TV </span>
                    </div>
                    <div className="flex items-center" >
                        <IconsWifi /> <span span className="ml-2">Wi-Fi gratuito</span>
                    </div>
                     <div className="flex items-center" >
                    </div>
                </ContainerIcons>)

}

export default IconAccomodation