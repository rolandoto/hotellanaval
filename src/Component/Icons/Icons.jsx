import { PiSnowflakeThin } from "react-icons/pi";
import { CiWifiOn } from "react-icons/ci";
import { PiAirplayLight } from "react-icons/pi";
import { BsSafe  } from "react-icons/bs";
import { PiShowerLight } from "react-icons/pi";
import { PiTowelLight } from "react-icons/pi";
import { CiCircleCheck } from "react-icons/ci";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiDeleteBin2Line } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsArrowDownShort } from "react-icons/bs";
import { BsArrowUpShort } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { TiHome } from "react-icons/ti";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaMartiniGlassCitrus } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import { FaSquareParking } from "react-icons/fa6";
import { FaStore } from "react-icons/fa";
import { FaBanSmoking } from "react-icons/fa6";
import { FaConciergeBell } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import { PiBedThin } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { MdOutlineKingBed } from "react-icons/md";

export const IconsSnow =() =>{
    const key = `my-tooltip`;
   
    return <>
            <Tooltip 
                    id={key} 
                    place="top"
                    style={{ backgroundColor: "black", color: "white" }} 
                    variant="info"  >
                    Hello
            </Tooltip>
     
            <PiSnowflakeThin   data-tooltip-id="my-tooltip"
                                data-tooltip-content="Aire acondicionado" data-for={key} data-tip fontSize={35}  />
            </>
}


export const IconsPiBedThin =() =>{
    const key = `my-tooltip`;
   
    return <>
            <Tooltip 
                    id={key} 
                    place="top"
                    style={{ backgroundColor: "black", color: "white" }} 
                    variant="info"  >
                    Hello
            </Tooltip>
            <PiBedThin   data-tooltip-id="my-tooltip"
                                data-tooltip-content="Cama matrimonial" data-for={key} data-tip fontSize={35}  />
            </>
}

export const IconsWifi =() =>{
   
    const key = `my-tooltip`;
    
    return <>
            <Tooltip 
                    id={key} 
                    place="top"
                    style={{ backgroundColor: "black", color: "white" }} 
                    variant="info"  >

            </Tooltip>
            <CiWifiOn  data-tooltip-id="my-tooltip"
                data-tooltip-content="Wifi" data-for={key} data-tip fontSize={35}   />
            </> 
}

export const IconsTv =() =>{
    const key = `my-tooltip`;
    
    return <>
             <Tooltip 
                    id={key} 
                    place="top"
                    style={{ backgroundColor: "black", color: "white" }} 
                    variant="info"  >

            </Tooltip>
            <PiAirplayLight data-tooltip-id="my-tooltip"
                data-tooltip-content="Tv" data-for={key} data-tip fontSize={35}   />
            </> 
}

export const IconsSafe =() =>{
    const key = `my-tooltip`;
    
    return <>
                <Tooltip 
                    id={key} 
                    place="top"
                    style={{ backgroundColor: "black", color: "white" }} 
                    variant="info"  >
                        </Tooltip>
                <BsSafe data-tooltip-id="my-tooltip"
                data-tooltip-content="Caja fuerte" data-for={key} data-tip fontSize={33} />
            </> 
}

export const IconShower =() =>{
    const key = `my-tooltip`;
    
    return <>
            <Tooltip 
                id={key} 
                place="top"
                style={{ backgroundColor: "black", color: "white" }} 
                variant="info"  >
                    </Tooltip>
                    <PiShowerLight data-tooltip-id="my-tooltip"
                data-tooltip-content="Ducha" data-for={key} data-tip fontSize={35}  />
        </> 
}

export const IconTowels =() =>{
    const key = `my-tooltip`;
    
    return <>
            <Tooltip 
                id={key} 
                place="top"
                style={{ backgroundColor: "black", color: "white" }} 
                variant="info"  >
                    </Tooltip>
                    <PiTowelLight data-tooltip-id="my-tooltip"
                data-tooltip-content="Toalla" data-for={key} data-tip fontSize={35}  />
            </> 
}

export const IconsCheck =() =>{
    const key = `my-tooltip`;
    
    return <>
                <Tooltip 
                id={key} 
                place="top"
                style={{ backgroundColor: "black", color: "white" }} 
                variant="info"  >
                    </Tooltip>
                    <CiCircleCheck  data-tooltip-id="my-tooltip"
                data-tooltip-content="Desayuno" data-for={key} data-tip fontSize={35}   />
        </> 
}
export const IconFaWhatsapp =() =>{
    return <FaWhatsapp  className="mr-2" fontSize={30}  />
}
export const IconCiFacebook =() =>{
    return <CiFacebook className="mr-2" fontSize={30}  />
}
export const IconFaMapMarkerAlt =() =>{
    return <FaMapMarkerAlt className="mr-2" fontSize={30}  />
}
export const IconFaInstagram =({onclick}) =>{
    return <FaInstagram className="mr-2" fontSize={30} onClick={onclick}  />
}
export const IconFaFacebookF =({onclick}) =>{
    return <FaFacebookF className="mr-2" fontSize={30}  onClick={onclick} />
}
export const IconFaYoutube =() =>{
    return <FaYoutube className="mr-2" fontSize={30}  />
}

export const IconsRiDeleteBin2Line =() =>{
    return <RiDeleteBin2Line  color="red" className="mr-2" fontSize={30}  />
}

export const IconRiCloseLargeLine =() =>{
    return <RiCloseLargeLine  color="black" className="mr-2" fontSize={25}  />
}

export const IconRiDeleteBinLine =({handSubmit}) =>{
    return <RiDeleteBinLine  
                    color="red" 
                    className="" 
                    fontSize={20}
                    onClick={handSubmit}  />
}

export const IconBsArrowDownShort =() =>{
    return <BsArrowDownShort  color="black" className="" fontSize={20}  />
}
export const IconsBsArrowUpShort =() =>{
    return <BsArrowUpShort  color="black" className="" fontSize={20}  />
}
export const IconCiShoppingCart =() =>{
    return <CiShoppingCart   color="white" className="" fontSize={35}  />
}
export const IconsTiHome =() =>{
    return <TiHome   color="#ff7a45" className="" fontSize={30}  />
}

export const IconsFaGlassMartini =() =>{
    return <FaMartiniGlassCitrus   color="black" className="" fontSize={30}  />
}

export const IconsGiForkKnifeSpoon =() =>{
    return <GiForkKnifeSpoon   color="black" className="" fontSize={30}  />
}


export const IconsaCar =() =>{
    return <FaCar   color="black" className="" fontSize={30}  />
}



export const IconsFaSquareParking =() =>{
    return <FaSquareParking   color="black" className="" fontSize={30}  />
}

export const IconsFaStore =() =>{
    return <FaStore   color="black" className="" fontSize={30}  />
}

export const IconsFaBanSmoking =() =>{
    return <FaBanSmoking   color="black" className="" fontSize={30}  />
}

export const IconsFaConciergeBell =() =>{
    return <FaConciergeBell   color="black" className="" fontSize={30}  />
}


export const IconsRiBankFill =() =>{
    return <RiBankFill   color="black" className="" fontSize={30}  />
}


export const IconsMdEmail =({color}) =>{
    return <MdOutlineEmail   color={color} className="mr-2" fontSize={30}  />
}


export const IconFaCheckCircle  =({color}) =>{
    return <FaCheckCircle  color={color} className="mr-2" fontSize={70}  />
}

export const IconFaUser  =({color}) =>{
    return <ImUsers   color={color} fontSize={20}  />
}


export const IconMdOutlineKingBed   =({color}) =>{
    return <MdOutlineKingBed    color={color} fontSize={25}  />
}
