import React, {useState} from 'react'
import './ContactPage.css'
import { NavLink } from 'react-router-dom'

const ContactPage = () => {

const [formUserData, setFormUserData] = useState({
        nombre:'',
        email:'',
        mensaje:'',
})

const handleFormUser = (evento) =>{
        evento.preventDefault()
}

const HandleChangeFormUser = (evento) =>{
    console.log(evento.target.value)
    setFormUserData({...formUserData, [evento.target.name]: evento.target.value})
}

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
      <div className="contenedor">
      <div className="formatoContactPage control-Formato">
      <div className="contenedorTitulo control-Titulo">
      <strong>Contact us</strong>
      </div >
        <form onSubmit={handleFormUser} className="formatoFormulario control-formulario">
            
            <label htmlFor="nombre">Full name </label>
            <input className='inputNombre' type='text' id="nombre" name="nombre" required onChange={HandleChangeFormUser} value={formUserData.nombre}/>

            <label htmlFor="email">email</label>
            <input className="inputCorreo" type='email' id="email" name="email" required onChange={HandleChangeFormUser} value={formUserData.email}/>

            <label htmlFor="mensaje">Message</label>
            <textarea className="inputTexto" name="mensaje" id="mensaje" cols="30" rows="10" required onChange={HandleChangeFormUser} value={formUserData.mensaje}></textarea>
            <button className="btn-enviar" type='submit'>Send</button>
        </form>
        </div>
        </div>
    </>
  )
}

export default ContactPage