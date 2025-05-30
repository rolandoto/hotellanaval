import React, { useEffect } from "react"
import CardCheckout from "../CardCheckout/CardCheckout"
import FormValues from "../FormValues/FormValues"
import { useSelector } from "react-redux"
import UseHotelActions from "../../Actions/useHotelsActions"

const FormCheckout=({Country,handleSubmit,loading,formErrors,handleChange,formValues,cart,subtotal}) =>{

    const {hotelList,loadingHotel,errorHotel}= useSelector((state) => state.Hotel)
    const {getListHotel} =UseHotelActions()

    const fetchDate =async() =>{
      await getListHotel()
    }
  
    useEffect(() =>{
      fetchDate()
    },[])

    //docuimetn
    const FindIdHotel=(hotel) =>{
        return hotel.id_hotel ==26
    }
    
    const hotel = hotelList.find(FindIdHotel) 
  
    const FillContent =()=>{
        if(loadingHotel){
                return <p>cargando</p>
        }

        if(errorHotel){
            return   <h1>Error en el servicio</h1>
        }
        return  hotel?.nombre
    }

    return (<div className= "  min-h-screen" >
                <div className="flex  justify-center  ">
                    <div className="mt-12 bg-white p-6 rounded-3xl shadow-lg w-full max-w-5xl">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-xl font-semibold mb-4">Datos del Huésped</h2>
                            <FormValues
                                loading={loading}
                                handleSubmit={handleSubmit}
                                formErrors={formErrors}
                                handleChange={handleChange}
                                formValues={formValues}
                                Country={Country}
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-4 bg-gray-50 rounded-lg">
                            <div className="p-6 border border-gray-300 rounded-lg">
                                <h2 className="text-xl font-bold mb-4">Resumen de tu reserva</h2>
                                    <div className="mb-4">
                                        <h3 className="text-lg font-semibold">{FillContent()}</h3>
                                        <p className="text-gray-600">Cra. 44 #47-20, Medellín, Colombia</p>
                                    </div>
                                    {cart.map((itemCardRoom,e) =>(
                                    <CardCheckout key={e}   {...itemCardRoom} />
                                ))}
                                <div className=" border-gray-300 rounded-lg">
                                <div className="text-right items-center">
                                    <p className="text-sm text-gray-600 mb-1">Total de la reserva</p>
                                    <p className="text-2xl font-bold mb-2">${parseInt(subtotal).toLocaleString('es-CO')} cop</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
            </div>)
}

export default FormCheckout