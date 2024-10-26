import React, { Fragment, useCallback, useState } from "react"
import RoomItem from "../RoomItem/RoomItem";
import { IconRiCloseLargeLine } from "../Icons/Icons";
import UseCart from "../../Hooks/UseCart";
import { useNavigate } from "react-router-dom";
import { ButtonSearch } from "../../Ui/Style/GeneralStyle";
import { FiArrowRight } from "react-icons/fi";

const Cart = () => {

    const {cart,getCartSubtotal,getCartTotalCount,getCartTotalCountPerson} = UseCart()
    const subtotal = getCartSubtotal()
    const totalCount = getCartTotalCount()
    const quantityPerson = getCartTotalCountPerson()

    const navigate = useNavigate();

    const PostHotelByIdHotel = useCallback(async () => {
         navigate("/Checkout");
      }, []);


      

    //{numOfProductsInCart ==0 ? <EmpyCart title={"Tu carrito esta vacio"}  /> 
    //fixed top-20 z-50 cart let-0 right-0 bg-white transition duration-200  border rounded-md shadow-md w-80 mx-auto mt-10

      
    /**
     * 
     * <aside className={`fixed top-20 z-50  cart  ${checkbox ? "active" : ""}  let-0 right-0 bg-white transition duration-200  border rounded-md shadow-md w-80 mx-auto mt-10`}>
        <button className="absolute right-0  top-2"  onClick={handClickCart} >
            <IconRiCloseLargeLine />
        </button>
            <Fragment>
                <div >
                    <div className="p-4  bg-gray-100 ">
                        <h2 className="text-xl font-bold mb-4">Hotel gallery</h2>
                        <h2 className="text-xl">Total habitaciones ({totalCount})</h2>
                    </div>
                    <div className="p-4 space-y-4  overflow-auto max-h-[250px]    ">
                        {cart.map((cartItem,index) => (
                            <RoomItem   key={index}  
                                        {...cartItem} 
                                   />
                        ))}
                    </div>
                </div>
                <div className="w-full  bg-gray-100 pt-4">
                    <div className="p-4">
                        <h3 className="text-lg   font-normal">Total de la Reserva</h3>
                        <p className="text-black text-[30px] ">{subtotal.toLocaleString('es-CO')} COP</p>
                        <button className="mt-4 w-full px-4 py-2 items-center bg-orange-500 text-white rounded-md"
                            onClick={PostHotelByIdHotel}>Continuar</button>
                    </div>
                  
                </div>
            </Fragment>
      </aside>
     * 
     */

     
      
    return (
        <div className="w-full p-4 z-50  fixed bottom-0 bg-white border-t border-gray-300 shadow-lg flex items-center justify-between">
        {/* Sección de precio y detalles */}
        <div className="flex flex-col">
          <span className="text-lg font-bold text-black">${subtotal.toLocaleString('es-CO')} cop</span>
          <span className="text-sm text-black">{totalCount} Habitacion {quantityPerson} huéspedes</span>
        </div>
        
        <div className=" flex justify-between">
            <ButtonSearch onClick={PostHotelByIdHotel} className="  justify-center  items-center lg:text-[15px]  text-[12px]  flex  cursor-pointer z-40 lg:w-[250px]   w-[150px] bg-black text-white lg:py-4 py-2    rounded-full hover:bg-[ff7a45px] transition duration-200">
                Confirmar Reserva <FiArrowRight fontSize={25}/>
            </ButtonSearch>
        </div>
       
      </div>

       
      
    );
  };
  export default Cart