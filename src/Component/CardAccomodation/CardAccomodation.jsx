
import React, { Fragment }  from "react";
import { IconFaUser, IconMdOutlineKingBed } from "../Icons/Icons";
import useCartActions from "../../Actions/useCartActions";
import { useSelector } from "react-redux";
import {toast} from "sonner"
import RadioButton from "../RadioButton/RadioButton";

const CardAccomodation =({ID,room_image,title,description,Price,cantidad,nights,person,Room,end,start,Price_nigth,promotion,totalCountAdults,max_people}) =>{
        
    const {AddCart } =useCartActions()
    
    const {cart} = useSelector(state => state.Cart);

    const originalPrice = Price; // Precio original
    const discountRate = 0.19; // 19% de descuento
    const discountedPrice = originalPrice * (1 - discountRate);
   
    const validPromotions =promotion ? discountedPrice :  Price


        const Icon = () => {
            return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            );
    };
    
     // Formatear precio en formato COP
     const formatPrice = (price) => {
        return `COP ${price.toLocaleString('es-CO')}`;
      };

    const handleAddToCart = () => {
        let roomByID = 0
        Object.values(Room)
          .forEach((itemRoom) => {
            if(cart.every((item) =>item.roomByID != itemRoom)){
                roomByID = itemRoom
            }else{
                roomByID=roomByID
            }
          })
        if(roomByID !=0){
            AddCart({ID,room_image,title,Price:validPromotions,cantidad,nights,person,roomByID,end,start,quantity:1,Price_nigth})
        }else{
            toast.error("no habitacion disponible")
        }
    };

    return (   
        <div  className="max-w-lg  border border-gray-200  overflow-hidden bg-white shadow-sm">        
        <div className="relative">
          <img 
            src={room_image}
            alt={title} 
            className={`w-full object-cover  h-[300px]  animation   `}
          />
        </div>
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col gap-3">
          <div className=" bottom-2 left-2 flex gap-4 text-gray-600 text-sm">
            <div className="flex items-center gap-1  bg-opacity-60 px-2 py-1 rounded">
                 <IconFaUser  />
              <span>{person}</span>
            </div>
            <div className="flex items-center gap-1 bg-opacity-60 px-2 py-1 rounded">
              <IconMdOutlineKingBed/>
              <span>1</span>
            </div>
          </div>
          </div>
        </div>

        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-2">{title}</h2>
          <div className="text-gray-600 flex flex-col gap-1">
          </div>
        </div>
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-medium mb-2">Oferta</h3>
          <div className="flex flex-col gap-3">
              <RadioButton
                checked={true}>
                <div className="w-full items-center flex justify-between">
                  <div>
                    <div className="mt-1 text-sm">
                        <div className="flex items-center gap-1">
                          <Icon name="check" />
                          <span>Descuento para miembros aplicado</span>
                        </div>
                    </div>
                  </div>
                    <span className="text-sm">+ {formatPrice(validPromotions )}</span>
                </div>
              </RadioButton>
          </div>
        </div>
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-medium mb-2">Plan de alojamiento</h3>
          <div className="flex flex-col gap-3">
            <RadioButton
            checked={true}
              >
              <Icon name="check" />
              <div className="flex justify-between w-full">
                <span className="text-sm">Solo habitación</span>
                <span className="text-sm">+ Habitación online</span>
              </div>
            </RadioButton>
           
          </div>
        </div>
        <div className="p-4">
           {validPromotions && 
           <div className="bg-gray-800 rounded-xl text-white px-2 py-1 text-xs inline-block mb-2">
           Beneficios para miembros aplicados -{10}%
         </div> } 
          <div className="flex justify-between items-start mb-1">
            <div className="flex items-end gap-1">
              <span className="text-2xl font-bold">{formatPrice(validPromotions)}</span>
            </div>
          </div>
          <button onClick={handleAddToCart} className="w-full bg-gray-800 text-white py-2 px-4 rounded  transition">
            Reservar
          </button>
        </div>
      </div>)
}

export default CardAccomodation