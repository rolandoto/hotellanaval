import React from "react"
import {Button} from "@nextui-org/react";
import pdf from "../../Image/LLERASPARK.pdf"
const FormValues =({handleSubmit,formErrors,handleChange,formValues,loading,Country})  =>{

    /**
     * 
     * <div className="mb-4 mt-5">
                        <h2 className="text-xl font-semibold">Método de Pago</h2>
                       
                        </div>
                    
                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Titular de la tarjeta (obligatorio)
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                name="cardName"
                                value={formValues.cardName}
                                onChange={handleChange}
                                type="text" 
                                placeholder="Titular de la tarjeta (obligatorio)" 
                            />
                            {formErrors.cardName && <p className="text-red-500 text-xs">{formErrors.cardName}</p>}
                            </div>
                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Número de la tarjeta (obligatorio)
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                name="cardNumber"
                                value={formValues.cardNumber}
                                onChange={handleChange}
                                type="text" 
                                placeholder="5306 9172 2567 9369" 
                            />
                                {formErrors.cardNumber && <p className="text-red-500 text-xs">{formErrors.cardNumber}</p>}
                            </div>
                            <div className="flex space-x-2 mb-4">
                            <div className="w-1/3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Expira el
                                </label>
                                <select 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                name="expiryMonth"
                                value={formValues.expiryMonth}
                                onChange={handleChange}
                                >
                                <option value={""} >Mes</option>
                                {[...Array(12).keys()].map(month => {
                                const monthValue = (month + 1).toString().padStart(2, '0');
                                return (
                                    <option key={monthValue} value={monthValue}>
                                    {monthValue}
                                    </option>
                                );
                                })}
                                </select>
                                {formErrors.expiryMonth && <p className="text-red-500 text-xs">{formErrors.expiryMonth}</p>}
                            </div>
                            <div className="w-1/3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryYear">
                                Año
                                </label>
                                <select 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                name='expiryYear'
                                value={formValues.expiryYear}
                                onChange={handleChange}
                                >
                                    <option value={""} >Año</option>
                                    {[...Array(13).keys()].map(year => {
                                    const yearValue = 23 + year; // Años del 2024 al 2036
                                    return (
                                    <option key={`year-${yearValue}`} value={yearValue}>
                                        {yearValue}
                                    </option>
                                    );
                                })}

                                </select>
                                {formErrors.expiryYear && <p className="text-red-500 text-xs">{formErrors.expiryYear}</p>}
                            </div>

                            <div className="w-1/3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvc">
                                CVC
                                </label>
                                <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                type="text" 
                                name='cvc'
                                value={formValues.cvc}
                                onChange={handleChange}
                                placeholder="123" 
                                />
                                {formErrors.cvc && <p className="text-red-500 text-xs">{formErrors.cvc}</p>}
                            </div>
                            </div>
     * 
     */

    /**
     * 
     * <div>
                            <label className="block text-sm font-medium text-gray-700">Dirección</label>
                            <input
                                name="address"
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                placeholder="Dirección"
                                value={formValues.address}
                                onChange={handleChange}
                            />
                            {formErrors.address && <p className="text-red-500 text-xs">{formErrors.address}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Ciudad</label>
                            <input
                                name="city"
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                placeholder="Ciudad"
                                value={formValues.city}
                                onChange={handleChange}
                            />
                            {formErrors.city && <p className="text-red-500 text-xs">{formErrors.city}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">País</label>
                            <select
                                name="country"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                value={formValues.country}
                                onChange={handleChange}
                        >
                            <option value={""} >País</option>
                            {Country.map((itemCountry) => (
                                <option key={itemCountry.ID} value={itemCountry.ID}>
                                    {itemCountry.nombre}
                                </option>
                            ))}
                            </select>
                            {formErrors.country && <p className="text-red-500 text-xs">{formErrors.country}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Requerimientos especiales</label>
                            <input
                                name="specialReq"
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                placeholder="Requerimientos especiales"
                                value={formValues.specialReq}
                                onChange={handleChange}
                            />
                        </div>
     * 
     */

    return (<form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nombre</label>
                            <input
                                name="name"
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                placeholder="Nombre"
                                value={formValues.name}
                                onChange={handleChange}
                            />
                            {formErrors.name && <p className="text-red-500 text-xs">{formErrors.name}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Apellido</label>
                            <input
                                name="apellido"
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                placeholder="Apellido"
                                value={formValues.apellido}
                                onChange={handleChange}
                            />
                            {formErrors.apellido && <p className="text-red-500 text-xs">{formErrors.apellido}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                name="email"
                            
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                            {formErrors.email && <p className="text-red-500 text-xs">{formErrors.email}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Número de teléfono</label>
                            <input
                                name="phone"
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                placeholder="Número de teléfono"
                                value={formValues.phone}
                                onChange={handleChange}
                            />
                            {formErrors.phone && <p className="text-red-500 text-xs">{formErrors.phone}</p>}
                        </div>
                        
                    </div>
                <div>
                    </div>
                    
                    
                    <div className=" mx-auto  rounded-md ">
                        
                            <div className="mb-4">
                            <label className="flex items-center">
                                <input 
                                name='termsAccepted'
                                value={formValues.termsAccepted}
                                onChange={handleChange}
                                type="checkbox" 
                            
                                className="form-checkbox h-5 w-5 text-gray-600"
                                />
                                <span className="ml-2 text-gray-700">He leído y acepto las <a target="_blank" href={pdf} className="text-[#817c70]">condiciones generales</a> (*)</span>
                            </label>
                            {formErrors.termsAccepted && <p className="text-red-500 text-xs">{formErrors.termsAccepted}</p>}
                            </div>
                            <div className="mb-4">
                            <label className="flex items-center">
                                <input 
                                name='siteTermsAccepted'
                                value={formValues.siteTermsAccepted}
                                onChange={handleChange}
                                type="checkbox" 
                                className="form-checkbox h-5 w-5 text-gray-600"
                                />
                                <span className="ml-2 text-gray-700">He leído y acepto los <a  target="_blank" href={pdf} className="text-[#817c70]">Términos y Condiciones del sitio web</a> (*)</span>
                            </label>
                            {formErrors.siteTermsAccepted && <p className="text-red-500 text-xs">{formErrors.siteTermsAccepted}</p>}
                            </div>
                            <Button 
                            disabled={loading} 
                            type="submit" 
                            className={`w-full text-white py-2 bg-black px-4 rounded hover:bg-gray-800`} 
                            >
                            {loading ? "Cargando reserva" : "Finaliza tu reserva" } 
                            </Button>
                            <p className=" text-xs text-gray-500 mt-4">
                            Al completar esta reserva, acuerdo que he leído y aceptado las <a target="_blank" href={pdf} className="text-[#817c70]">Políticas de Propiedad</a>.
                        </p>
                    </div>
                    </form>)

}

export default FormValues