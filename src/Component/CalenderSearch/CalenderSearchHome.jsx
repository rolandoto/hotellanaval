import React from "react";
import { BorderInput, BorderInputInitial, ButtonSearch, ContainerButtonSearch, MainAccomodation, MainProduct } from "../../Ui/Style/GeneralStyle";
import { FiArrowRight } from "react-icons/fi";

const CalenderSearchHome =({HandClickMenuPeople,
                        HandClickMenuEnd
                        ,HandClickMenu,
                        onsubmit,
                        formattedStartDateToString,
                        formattedEndDateToString,
                        totalCountAdults}) =>{

    return (
     
            <MainProduct  className=" mt-[105px]  lg:flex hidden ">
                            <BorderInputInitial className="flex text-start flex-col hover-punter "  onClick={HandClickMenu}>
                            <span className=" text-gray-500  " >ENTRADA :</span>
                            <span className="  font-bold  " >  {formattedStartDateToString === 'fecha inválida' ? '-- / -- / --' : formattedStartDateToString}</span>
                            </BorderInputInitial>
                            <BorderInput className="flex flex-col  text-start  hover-punter" onClick={HandClickMenuEnd}>
                            <span className=" ">SALIDA :</span>
                            <span className="font-bold  " >{formattedEndDateToString === 'fecha inválida' ? '-- / -- / --' : formattedEndDateToString}</span>
                            </BorderInput>
                            <BorderInput className="flex flex-col  text-start  hover-punter"  onClick={HandClickMenuPeople} >
                                <span className=" ">Huesped :</span>
                                <span className=" font-bold " >{totalCountAdults}</span>
                                </BorderInput>
                            <ContainerButtonSearch  className="  ">
                                        <ButtonSearch className=" lg:hidden justify-center  items-center    flex  cursor-pointer z-40   w-full bg-[#3dbff2] text-white py-4    rounded-full hover:bg-[ff7a45px] transition duration-200" onClick={onsubmit}>
                                              <span className="" >Reservar</span>   <FiArrowRight fontSize={25}/>
                                        </ButtonSearch>
                                        <ButtonSearch className=" justify-center  items-center lg:flex hidden cursor-pointer    p-4  w-[150px]   bg-[#3dbff2]  text-white py-4    rounded-full  hover:bg-[ff7a45px] transition duration-200" onClick={onsubmit}>
                                        
                                        Reservar  <FiArrowRight fontSize={23}/>
                                        </ButtonSearch>
                            </ContainerButtonSearch>
            </MainProduct>
            
    )
}

export default CalenderSearchHome