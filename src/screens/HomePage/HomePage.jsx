import React from 'react'
import './HomePage.css'
import { useCustomContext } from '../../context/ContextProvider'
import { ProductCard, BrandSideBar, MemorySideBar, NavBar } from '../../components'

const HomePage = () => {
    const {products} = useCustomContext()
  return (
    <>
    <div className="formatoNavegador">
      <NavBar/>
    </div>
    <div>
      <div><h1>Apple Store</h1></div>
      <div className="mainContainer">
        <div className="formato">
          {products.map(producto =>(
          <ProductCard producto={producto} key={producto.id}/>
          ))}
        </div>
      <div className="sideBar">
          <div className="brandContainer">
            <BrandSideBar/>
          </div>
          
          <div className="memoryContainer">
            <MemorySideBar/>
          </div>
          <div className="priceContainer">

          </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default HomePage