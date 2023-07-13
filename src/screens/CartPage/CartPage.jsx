import React from 'react'
import { useCustomContext } from '../../context/ContextProvider'
import { ProductCard, NavBar, ProductCardCart } from '../../components'

const CartPage = () => {
    const {cart} = useCustomContext()
  return (
    <div>
        <div className="formatoNavegador">
          <NavBar/>
        </div>
        <div>
            {cart.map(product =>(
              <ProductCardCart key={product.id} producto={product}/>
            ))}
        </div>
    </div>
  )
}

export default CartPage