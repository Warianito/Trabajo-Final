import React from 'react'
import { useCustomContext } from '../../context/ContextProvider'
import { ProductCard, ProductCardCart } from '../../components'
import { NavLink } from 'react-router-dom'
import './CartPage.css'


const CartPage = () => {
    const {cart, getTotal} = useCustomContext()
    console.log(getTotal())
  return (
    <div>
      <div className="formatoNavegador navegador-control">
        <div className="formatoBrand brand-control">
          <img src="../public/eaten-apple.svg" alt="Logo de la marca"/>
          <h2>Eaten Apple</h2>
        </div>
      
      <div className="formatoMenu menu-control">
        <NavLink to='/contact'><strong>Contacto</strong></NavLink>
        <NavLink to='/'><i className="bi bi-house-door"></i></NavLink>
        <NavLink to='/cart'><i className="bi bi-cart3"></i></NavLink>
        <i className="bi bi-binoculars"></i> 
      </div>
    </div>

    <div className="contenedorCarrito">
      <div className="contenedorProductos">
        {cart.map(product =>(
          <ProductCardCart key={product.id} producto={product}/>
        ))}
      </div>
      
      <div className="totalContainer">
          ${getTotal()}
      </div>
    </div>
  </div>
)
}

export default CartPage