import React from "react"

const benefits = [
    { icon: "🍹", title: "BEBIDA DE", subtitle: "Bienvenida" },
    { icon: "🛎️", title: "EARLY CHECK-IN", subtitle: "Bajo disponibilidad" },
    { icon: "🛏️", title: "UPGRADE DE HABITACIÓN", subtitle: "Bajo disponibilidad" },
    { icon: "🍽️", title: "15% DE DESCUENTO", subtitle: "En restaurante" },
    { icon: "👕", title: "15% DE DESCUENTO", subtitle: "En lavandería" },
  ];

const TitleWelcome  =() =>{

    return (
        <section className="text-center p-8 bg-white">
        <h2 className="text-3xl font-semibold text-blue-600">DISFRUTA DE</h2>
        <h3 className="text-xl font-bold text-gray-800 mt-2">VENTAJAS EXCLUSIVAS</h3>
        <p className="text-sm text-yellow-600 mt-1">
          FORMA PARTE DE NUESTRO PROGRAMA DE FIDELIZACIÓN
        </p>
  
        <div className="flex justify-center my-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Barlovento_logo.png" alt="Barlovento" className="h-10" />
        </div>
  
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-yellow-600 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl">
                {benefit.icon}
              </div>
              <p className="text-sm font-bold text-gray-800 mt-2">{benefit.title}</p>
              <p className="text-xs text-gray-600">{benefit.subtitle}</p>
            </div>
          ))}
        </div>
      </section>)

}

export default TitleWelcome