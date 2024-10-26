import React from "react"


const TitleWelcome  =() =>{

    return (
        <div className="w-full ">
            <div className="flex flex-col     mx-auto max-w-7xl  md:flex-row items-center  p-4">
               <div className="md:w-1/2 p-4">
               <img
                    src="https://github.com/rolandoto/image-pms/blob/main/IMG_4657.JPG?raw=true"
                    alt="Room"
                    className="w-full h-auto rounded-3xl shadow-2xl"
                />
                    </div>
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-normal text-white mb-4 font-lora text-[30px] text-center ">¡Civitas!</h2>
                <p className="text-justify text-white	 mb-4">
                    Ubicado en el dinámico ,  la cultura de Medellín, Civitas redefine la forma en que experimentas la ciudad. Nuestro espacio celebra la rica cultura callejera y artística de Medellín, brindándote un lugar acogedor para vivir, trabajar y conectarte con otros. Cada rincón del hotel está inspirado en el arte urbano local, creando una atmósfera única y estimulante.
                </p>
                <p className=" text-justify text-white	 ">
                    Nuestras habitaciones de coliving, decoradas con obras de artistas locales, ofrecen un refugio creativo y cómodo, perfecto para quienes buscan una experiencia auténtica y enriquecedora. Disfruta de la espectacular terraza en la azotea, donde podrás relajarte con cócteles artesanales y admirar las vistas panorámicas del Parque Lleras. Además, nuestro restaurante te invita a un viaje de sabores con cocina local reinventada, ideal para compartir con amigos y nuevos conocidos.
                </p>
                </div>
            </div>
        </div>)

}

export default TitleWelcome