import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

const ProductCard = ({producto}) => {
  return (
    <div>
         <Link className="formatoProductCard" to={'/detail/' + producto.id}>
        <div className= "image" >
         <img src={producto.img}></img>
        </div>
        <div className="texto">
          <h2>{producto.tipo}</h2>
          <h3>{producto.nombre}</h3>
          <p>${producto.precio}</p>
        </div>
        </Link>
    </div>
  )
}

export default ProductCard