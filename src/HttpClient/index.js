import { config } from "../Config/Config";

const PostHotelByIdHotel = async ({id,desde,hasta,counPeople}) => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/hotels/SeacrhHotelsById`, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({id,desde,hasta,counPeople})
        });
    
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
    
        const data = await resp.json();
        return data;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  const PostCreateReservation = async ({cart,name,apellido,email,city,country,fecha,number,exp_month,exp_year,cvc,card_holder,subtotal,phone}) => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/hotels/wompi/RegisterCardWompi`, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({cart,name,apellido,email,city,country,fecha,number,exp_month,exp_year,cvc,card_holder,subtotal,phone})
        });
    
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
    
        const {ok} = await resp.json();
        return ok;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  const GetCountry = async () => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/resecion/getcountry`, {
          method: "GET",
          headers: {
            'Content-type': 'application/json'
          }
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
    
        const {query} = await resp.json();
        return query;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  const getListoHotel = async () => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/listmotels`, {
          method: "GET",
          headers: {
            'Content-type': 'application/json'
          }
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
    
        const {query} = await resp.json();
        return query;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };



  const PostCreateEvents = async ({Name,Description,Start_date,End_date,Place,id_hotel}) => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/hotels/webSite/InsertEventsWebsite`, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({Name,Description,Start_date,End_date,Place,id_hotel})
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }

        console.log(resp)
        const data = await resp.json();
        return data;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  const getEvents= async ({id}) => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/hotels/webSite/getEvents/${id}`, {
          method: "GET",
          headers: {
            'Content-type': 'application/json'
          }
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
        const {userQuery} = await resp.json();
        return userQuery;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };


  const getEventsDetail= async ({id}) => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/hotels/webSite/getEventsDetail/${id}`, {
          method: "GET",
          headers: {
            'Content-type': 'application/json'
          }
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
        const {userQuery} = await resp.json();
        return userQuery;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };


  const PostRoomPromotions = async ({days}) => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/hotels/RoomHotelPromotion`, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({days})
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
        const {ok} = await resp.json();
        return ok;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  const GetRoomsPromtions = async ({id}) => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/hotels/RoomHotelPromotion/${id}`, {
          method: "GET",
          headers: {
            'Content-type': 'application/json'
          },
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
        const {userQuery} = await resp.json();
        return userQuery;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  export default {
    PostHotelByIdHotel,
    PostCreateReservation,
    GetCountry,
    getListoHotel,
    PostCreateEvents,
    getEvents,
    getEventsDetail,
    PostRoomPromotions,
    GetRoomsPromtions
  }


  

