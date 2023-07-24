import React, {useState} from 'react'
import './Counter.css'
import { useCustomContext } from '../../context/ContextProvider'

const Counter = ({initialValue, stock, id}) => {
    const {addProductCart} = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)
    console.log(stock)
    return (
    <>
        
        <div className="formatoBtnContador">
            <button className="btn-dec" onClick={()=> setQuantity(quantity > 1 ? quantity - 1 : quantity)}>-</button>
            <span className="contenedorCantidad">{quantity}</span>
            <button className="btn-inc" onClick={()=> setQuantity(quantity === stock ? quantity  : quantity + 1)}>+</button>
        </div>
        <button className="btn-confirm" onClick={ () => addProductCart(id, quantity)}>Confirmar</button>
        </>
  )
}

export default Counter