import { useSelector } from "react-redux";

const UseCart =() =>{

    const {cart} = useSelector(state => state.Cart);
   
    /*const getCartSize = () => {
        let quantity = 0
        Object.values(cart)
          .forEach(({ quantity: productQuantity }) => (quantity += productQuantity))
        return quantity
    }*/


    

    const getCartSubtotal = () => {
      let subtotal = 0    
      Object.values(cart)
        .forEach(({ quantity, Price }) => {
          subtotal += Price
        })
  
      return subtotal
  }

    
    const getCartTotalCount = () => {
        let totalCuantity = 0    
        Object.values(cart)
          .forEach(({ quantity}) => {
            totalCuantity += quantity
          })
        return totalCuantity
    }


    const getCartTotalCountPerson = () => {
      let personQuantity = 0;
      Object.values(cart)
      .forEach(({ person}) => {
        personQuantity += person
      })
      return personQuantity;
  }

    return {
        getCartSubtotal,
        getCartTotalCount,
        cart,
        getCartTotalCountPerson
       
    }

}

export default UseCart 