import React from 'react'

const ProductCardCart = ({producto}) => {
  return (
<>
   <div className= "image" >
    <img src={producto.img}></img>
   </div>
   <div className="texto">
     <h2>{producto.tipo}</h2>
     <h3>{producto.nombre}</h3>
     <p>${producto.precio}</p>
     <p>Cantidad: {producto.quantity}</p>
   </div>
</>
  )
}

export default ProductCardCart