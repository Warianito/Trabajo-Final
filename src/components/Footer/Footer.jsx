import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className="containerFooter control-containerFooter">
        <div className="container">
            <strong>Constructor</strong>
            <p>12 Water St. Vacouver, BC</p>
            <p>V6B 132 United States</p>
        </div>
        <div className="container">
            <p>Corporate sales</p>
            <p>Feedback</p>
            <p>Jobs</p>
            <p>News</p>
            <p>Sales Rules</p>
            <p>For partners</p>
        </div>
        <div className="container">
            <p>Bonus program</p>
            <p>Gift Cards</p>
            <p>Bill Payment Verification</p>
            <p>Loans</p>
            <p>Delivery</p>
            <p>Service centers</p>
        </div>
        <div className="container">
            <p>How to place an order</p>
            <p>Ways of payment</p>
            <p>Exchange and return of goods</p>
            <p>Warranty service</p>
            <p>Order status</p>
            <p>Knowledge base</p>
        </div>
        <div className="container">
            <p>2030 Company. All Rights Reserved</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        </div>
    </div>
   

   <div className="containerFooterMobile control-ContainerFooterMobile">
    
    <div className="encabezadoFooter">
        <div><strong>Constructor</strong></div>
        <div className="containerDireccion">    
            <p>12 Water St. Vacouver, BC</p>
            <p>V6B 132 United States</p>
        </div>
    </div>

    <div className="cuerpoFooter">
        <div className="cuerpo1">
            <p>Corporate sales</p>
            <p>Feedback</p>
            <p>Jobs</p>
            <p>News</p>
            <p>Sales Rules</p>
            <p>For partners</p>
        </div>

        <div className="cuerpo2">
            <p>Bonus program</p>
            <p>Gift Cards</p>
            <p>Bill Payment Verification</p>
            <p>Loans</p>
            <p>Delivery</p>
            <p>Service centers</p>
        </div>
    </div>

    <div className="politics">
        <div><p>2030 Company. All Rights Reserved</p></div>
        <div className="politicsTerms">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        </div>
    </div>

    </div>
    </>
  )
}

export default Footer