import { TextWidth } from "../../Ui/Style/GeneralStyle"
import IconAccomodation from "../IconAccomodation/IconAccomodation"

const DescripctionAccomodation =({title,cantidad,description,promotion}) =>{

   /* const Cuantity =  cantidad == 1 ?   <span className="bg-red-500  rounded-sm text-[11px]   p-1 text-white">¡ultima habitacion!</span> :
    <span className="bg-orange-500  text-[11px] rounded-sm font-normal	 p-1  text-white">quedan {cantidad}  Habitaciones </span>
*/  

    return (  <div className="p-2" >  
                <TextWidth>
                <h2 className="text-[23px] font-normal font-weit ">{title}</h2>
                </TextWidth> 
                <div className="text-sm text-gray-600  "></div>
                    <IconAccomodation title={title}/>
                    {promotion && <div className="bg-orange-500  text-white flex items-center p-1 rounded-md">
                        <div className="mr-4 flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg>
                            <span className="font-lora text-sm">CÓDIGO DE PROMOCIÓN APLICADO</span>
                        </div>
                    </div>}
            </div>
    )
}

export default DescripctionAccomodation