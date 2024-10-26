import { ContaineButton } from "../../Ui/Style/GeneralStyle"
import { IconFaUser } from "../Icons/Icons";

const ButtonAccomodation =({price,nights,person,handleAddToCart,promotion,validPromotions,totalCountAdults,max_people})=>{
      
        return (
            <ContaineButton >
                <div className="p-2 " >
                    <div className="flex">
                    {[...Array(totalCountAdults)].map((_, i) => (
                        <IconFaUser key={i} color="black" />
                        ))}
                        {totalCountAdults < max_people && (
                        [...Array(max_people - totalCountAdults)].map((_, i) => (
                            <IconFaUser key={i + totalCountAdults} color="#b3b3b3" />
                        ))
                        )}
                    </div>
                    
                    <h2 className="text-[18px] font-normal ">Noches: {nights}</h2>
                    <h2 className="text-[18px]  font-normal ">Adultos: {person}  </h2>
                    {promotion  ?   <>
                        <s> <h2 className="text-[20px] font-normal" >${parseInt(price).toLocaleString('es-CO')} cop</h2> </s>
                        <h2 className="text-[20px] font-normal" >${parseInt(validPromotions).toLocaleString('es-CO')} cop</h2> 
                    </>  :<h2 className="text-[20px] font-normal" >${parseInt(price).toLocaleString('es-CO')} cop</h2>
                  }
                    <h2  className="text-1xl font-semibold "></h2>
                </div>
                <button onClick={handleAddToCart} className="  w-full md:w-[150px]   Button-Search bg-black text-white py-4  rounded transition duration-200">
                    Reservar 
                </button>
        </ContaineButton>
        )
}

export default ButtonAccomodation