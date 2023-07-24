import React, {useEffect, useState} from 'react'
import './DetailPage.css'
import { useCustomContext } from '../../context/ContextProvider'
import { ProductCard, Counter } from '../../components'
import { NavLink } from 'react-router-dom'

import { useParams} from 'react-router-dom'

/* const boldDescription = (descripcion) => {
  const textoEnNegrita = 'MacBook Pro de 16'; // Aquí defines la parte de la descripción que deseas resaltar
  return descripcion.replace(textoEnNegrita, <strong>{textoEnNegrita}</strong>);
}; */


const DetailPage = () => {
    const {id} = useParams()
    const {getProductById, addProductCart, isInCart, cart, getProductCartById} = useCustomContext()


    
    const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id))


  return (
    <>
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
  



    <div className="formatoDetail control-formatoDetail">
      <div className="formatoTituloDetail control-formatoTituloDetail">
        <h2>{productDetail.nombre}</h2>
        <h6>{productDetail.tipo}</h6>
      </div>
      <div className="formatoCuerpoDetail control-formatoCuerpoDetail">
      <div className="formatoContenedorImgPr">
        <img src={productDetail.img}></img>
        <h2>${productDetail.precio}</h2>
      </div>
      <div>
        <strong>Descripcion:</strong>
        <p>{productDetail.descripcion}</p>
      </div>
      </div>
      
    <div className="contenedorComprar">
        {isInCart(id) 
        ?
        <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail.id} />
        :
        <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id} />
        }
    </div>
    </div>
    </>
  )
}

export default DetailPage