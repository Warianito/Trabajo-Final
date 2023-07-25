import React, { useEffect, useState} from 'react'
import './HomePage.css'
import { NavLink } from 'react-router-dom'
import { useCustomContext } from '../../context/ContextProvider'
import { ProductCard, BrandSideBar, MemorySideBar, Footer } from '../../components'
/* import '../../components/Footer/Footer.css' */

const HomePage = () => {
    const {products} = useCustomContext()
    const [searchProduct, setSearchProduct] = useState('')
    const [currentProducts, setCurrentProducts] = useState(products)
   
    useEffect(() =>{
     setCurrentProducts(products.filter(producto => producto.tipo.toLowerCase().includes(searchProduct.toLowerCase())))
    }, [searchProduct])

  return (
    <>
    <div className="formatoNavegador navegador-control">
    <div className="formatoBrand brand-control">
        <img src="../../img/eaten-apple.svg" alt="Logo de la marca"/>
        <h2>Eaten Apple</h2>
      </div>
      <div className="formatoBuscador buscador-control">
        <i className="bi bi-search"></i>
        <input
         type="text" placeholder="Escriba el nombre ..." value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)}/>
      </div>
      <div className="formatoMenu menu-control">
        <NavLink to='/contact'><strong>Contacto</strong></NavLink>
        <NavLink to='/'><i className="bi bi-house-door"></i></NavLink>
        <NavLink to='/cart'><i className="bi bi-cart3"></i></NavLink>
        <i className="bi bi-binoculars"></i>
        
      </div>
    </div>

    <div className="titulo"><h1>Eaten Apple Store</h1></div>
      <div className="mainContainer">

        <div className="formato main-control">
          {currentProducts.map(producto =>(
          <ProductCard producto={producto} key={producto.id}/>
          ))}
        </div>
        
      <div className="sideBar sideBar-control">
          <div className="brandContainer">
            <BrandSideBar/>
          </div>
          
          <div className="memoryContainer">
            <MemorySideBar/>
          </div>
      </div>

    </div>
      
      <div>
        <Footer/>
      </div>
    
    </>
  )
}

export default HomePage