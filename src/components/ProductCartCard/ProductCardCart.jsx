import React from 'react'
import './ProductCardCart.css'

const ProductCardCart = ({producto}) => {
  return (
<>
  <div className="contenedorCartCard control-contenedorCartCard">
   <div className= "imageCartCard control-imagenCardCart" >
    <img src={producto.img}></img>
   </div>
   <div className="textoCartCard control-textoCartCard">
     <div className="contenedorTamaño control-contenedorTamaño"><h2>{producto.tipo}</h2></div>
     <div className="contenedorTamaño control-contenedorTamaño"><h3>{producto.nombre}</h3></div>
     <div className="contenedorTamaño control-contenedorTamaño"><p>${producto.precio}</p></div>
     <div className="contenedorTamaño control-contenedorTamaño"><p>Cantidad: {producto.quantity}</p></div>
   </div>
   </div>
</>
  )
}

export default ProductCardCart