import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className="formatoBrand">
        <img src="../public/ellipse.svg" alt="Logo de la marca"/>
        <h2>Todo apple</h2>
      </div>
      <div className="formatoBuscador">
        <i className="bi bi-search"></i>
        <input type="text" placeholder="Search Goods ..."/>
      </div>
      <div className="formatoMenu">
        <h3>Contact</h3>
        <NavLink to='/'><i className="bi bi-house-door"></i></NavLink>
        <NavLink to='/cart'><i className="bi bi-cart3"></i></NavLink>
      </div>
    </>
  )
}

export default NavBar