import React, {useEffect, useState} from 'react'
import './DetailPage.css'
import { useCustomContext } from '../../context/ContextProvider'
import { ProductCard, NavBar, Counter } from '../../components'
import '../../components/NavBar/NavBar.css'
import { useParams} from 'react-router-dom'

const DetailPage = () => {
    const {id} = useParams()
    const {getProductById, addProductCart, isInCart, cart, getProductCartById} = useCustomContext()


    
    const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id))


  return (
    <>
    <div className="formatoNavegador">
    <NavBar/>
    </div>
    <div>
        <h2>{productDetail.nombre}</h2>
        <h4>{productDetail.tipo}</h4>
    </div>
    <div>
        <img src={productDetail.img}></img>
        <h2>${productDetail.precio}</h2>
    </div>
    <div>
        <p>{productDetail.descripcion}</p>
    </div>
    <div>
        {isInCart(id) 
        ?
        <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail.id} />
        :
        <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id} />
        }
    </div>
    </>
  )
}

export default DetailPage