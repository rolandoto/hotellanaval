
import React, { Fragment }  from "react";
import { ImginProduct, MainAccomodationRoom, MainProduct } from "../../Ui/Style/GeneralStyle";
import ButtonAccomodation from "../ButtonAccomodation/ButtonAccomodation";
import DescripctionAccomodation from "../DescripctionAccomodation/DescripctionAccomodation";
import TitleDinner from "../TitleDinner/TitleDinner";
import useCartActions from "../../Actions/useCartActions";
import { useSelector } from "react-redux";
import {toast} from "sonner"

const CardAccomodation =({ID,room_image,title,description,Price,cantidad,nights,person,Room,end,start,Price_nigth,promotion,totalCountAdults,max_people}) =>{
        
    const {AddCart } =useCartActions()
    
    const {cart} = useSelector(state => state.Cart);

    const originalPrice = Price; // Precio original
    const discountRate = 0.19; // 19% de descuento
    const discountedPrice = originalPrice * (1 - discountRate);
   
    const validPromotions =promotion ? discountedPrice :  Price


    console.log(Room)

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
            <MainAccomodationRoom className=" lg:flex    mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8"   >     
            <MainProduct className="lg:flex block bg-white shadow-md"    >
                        <Fragment>
                            <ImginProduct   className="w-auto" src={room_image}  alt="Hotel Image"/>
                        </Fragment>
                        <DescripctionAccomodation cantidad={cantidad}  description={description} title={title}  />
                        <ButtonAccomodation 
                                max_people={max_people}
                                totalCountAdults={totalCountAdults}
                                validPromotions={validPromotions}
                                promotion={promotion}
                                handleAddToCart={handleAddToCart}
                                price={Price} 
                                nights={nights}
                                person={person}  />
                    </MainProduct> 
            </MainAccomodationRoom>)
}

export default CardAccomodation