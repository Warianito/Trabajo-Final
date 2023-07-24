import React from 'react'
import './App.css'
import { useCustomContext } from './context/ContextProvider'
import { ProductCard } from './components'
import { HomePage, DetailPage, CartPage, ContactPage} from './screens'
import {Route, Routes} from 'react-router-dom'

const App = () =>{

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </div>
  )
}

export default App
