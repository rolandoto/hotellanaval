import React from "react";

const  EmpyCart =({title}) =>{

    return ( <div className="flex   items-center justify-center ">
              <div className=" max-w-6xl p-8  g">
                <div className="flex justify-center mb-6">
                  <object 
                    id="cart-svg" 
                    type="image/svg+xml" 
                    data="https://m.media-amazon.com/images/G/30/cart/empty/animated/rolling-cart-desaturated._CB405720532_.svg" 
                    width="160" 
                    height="160">
                    <img 
                      alt="Carrito vacío" 
                      src="https://m.media-amazon.com/images/G/30/cart/empty/animated/cart-fallback-desaturated._CB405720532_.svg" 
                      height="160" 
                      width="160" 
                    />
                  </object>
                </div>
                <p className="bg-green-100 rounded-lg text-2xl font-lora text-center text-green-600">
                  {title}
                </p>
              </div>
        </div> )
}
export default EmpyCart