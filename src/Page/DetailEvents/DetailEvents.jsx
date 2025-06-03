import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { useSelector } from "react-redux";
import UseEventsActions from "../../Actions/useEventsActions";
import WhatsappButton from "../../Component/WhatsappButton/WhatsappButton";
import SearchGlobal from "../../Component/SearchGlobal/SearchGlobal";
import { MainProduct, SectionSearch } from "../../Ui/Style/GeneralStyle";
import BookNowButton from "../../Component/BookNowButton/BookNowButton";
import LoadingSkeleton from "../../Component/LoadingSkeleton/LoadingSkeleton";
import FooterHome from "../../Component/Footer/FooterHome";
import { Helmet } from "react-helmet";

const DetailEvents =() =>{


    
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
      setShowFullDescription(!showFullDescription);
    };


    const [scrolledbook, setScrolledBook] = useState(false);
    
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
        
        } if(window.scrollY > 200){
          setScrolledBook(true)
        } else {
        
          setScrolledBook(false)
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


    useEffect(() => {
        // Scrolls to the top of the document on component mount
        window.scrollTo(0, 0);
    }, []);

    let { userId } = useParams();

    const {geteventsDetail,loadinggetEventsDetail,errorgetEventsDetail}= useSelector(state => state.Events);
    const {getEventsDetail} =UseEventsActions()    
  
      const fetchDate =async() =>{
          await getEventsDetail({id:userId})
      }
  
      useEffect(() =>{
          fetchDate()
      },[])
 

  

   const FillContent =() =>{
    if(loadinggetEventsDetail){
        return <div  className=" lg:flex    mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8">
                    <LoadingSkeleton />
                    </div> 
    }if(errorgetEventsDetail){
        return  <div className="mx-auto max-w-4xl text-center p-6 mb-24" >
        <span className="text-2xl text-center font-mono text-black mb-4" >Evento no disponible </span>
            </div>
    }


    return <>
    <div className="lg:p-4 p-4" >
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center p-4">
        <img src={geteventsDetail.img_events} alt="Profile" className="w-8 h-8 rounded-full mr-3" />
        <div>
          <p className="font-semibold text-sm">{geteventsDetail.Name}</p>
          <p className="text-xs text-gray-500">{geteventsDetail.Name}</p>
        </div>
       
      </div>

        <div className="">
            <img src={geteventsDetail.img_events} alt="Profile" className="" />
        </div>
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex space-x-4">
         
        </div>
      </div>
        <div className="px-4" >
        <span  className=" text-2xl leading-3  font-lora text-black  mt-9" >{geteventsDetail.Place}</span>
        </div>
      
      <div className="px-4 py-2">
        <p className="text-sm">      
        <span
          className={showFullDescription ? '' : '  line-clamp-4'}
          dangerouslySetInnerHTML={{ __html: geteventsDetail.Description }}
        >
        </span>
         <button
        className="mt-2 text-black font-bold hover:text-black focus:outline-none"
        onClick={toggleDescription}
      >
        {showFullDescription ? 'Ver menos' : '...Más'}
      </button>

      </p>

     
      </div>
    </div>
    </div>
    </>
   
    }
    return (<>
            
            <Header/>

            <Helmet>
                <title>Detalle de eventos</title>
                <meta name="description" content="Habitaciones Black Friday - 10% de Descuento en hotel la naval." />
                <link rel="canonical" href="https://www.hotellanaval.co/events" />
            </Helmet>

            <div className="lg:hidden flex  p-2 lg:px-8" >
              <MainProduct className="m-auto ">
                <div className="flex lg:w-[47%] w-[100%] justify-center bg-[#3f6969] rounded-[40px]  p-4  items-center space-x-1">
                  <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                  <span className=" text-white">Elegir un espacio
                  </span>
                </div>
               
              </MainProduct>
            </div>  
                <WhatsappButton />


                

                {FillContent()}
                <FooterHome />
            </>)

}

export default  DetailEvents